import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { addNewPost, deletePost, getPosts, updatePost } from "./actions";
import { PostType, PostTypeWithTimestamp } from "../../models/PostModel";
import { PostState } from "./types";

const initialState = {
  error: null,
  loading: false,
  postsData: null,
} as PostState;

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getPosts.pending, (state) => {
        //mutating with the help of immer
        state.loading = true;
      })
      .addCase(
        getPosts.fulfilled,
        (state, action: PayloadAction<PostTypeWithTimestamp[]>) => {
          state.loading = false;
          state.postsData = action.payload;
        }
      )
      .addCase(getPosts.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
      });

    builder
      .addCase(updatePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(updatePost.fulfilled, (state, action: PayloadAction<PostType>) => {
        if (state.postsData) {
          const updatedPost: PostType = action.payload;
          let objIndex: number = state.postsData.findIndex(
            (postItem: PostType) => postItem.id === action.payload.id
          );
          state.loading = false;
          state.postsData[objIndex] = updatedPost;
        }
      })
      .addCase(updatePost.rejected, (state) => {
        state.loading = false;
      });

    builder
      .addCase(addNewPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        state.postsData?.push(action.payload);
        state.loading = false;
      })
      .addCase(addNewPost.rejected, (state) => {
        state.loading = false;
      });

    builder.addCase(deletePost.fulfilled, (state, action) => {
      if (state.postsData) {
        const updatedPost:PostTypeWithTimestamp[] = state.postsData.filter(
          (postItem:PostTypeWithTimestamp) => postItem.id !== action.payload
        );
        state.postsData = updatedPost;
      }
    });
  },
});

export default postSlice.reducer;
