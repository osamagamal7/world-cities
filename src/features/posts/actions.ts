import {  createAsyncThunk } from "@reduxjs/toolkit";

import { PostType, PostTypeWithTimestamp } from "../../models/PostModel";
import { sendHttpRequest } from "../../api/api";

export const getPosts = createAsyncThunk(
    "posts/getPosts",
    async (_, thunkApi) => {
      try {
        const response = await sendHttpRequest.getAll("posts");
        return response.data;
      } catch (error: any) {
        const message = error.message;
        return thunkApi.rejectWithValue(message);
      }
    }
  );
  export const updatePost = createAsyncThunk(
    "posts/updatePosts",
    async (data: PostTypeWithTimestamp, thunkApi) => {
      try {
        const response = await sendHttpRequest.update(`posts/${data.id}`, data);
  
        return response.data;
      } catch (error: any) {
        const message = error.message;
        return thunkApi.rejectWithValue(message);
      }
    }
  );
  export const addNewPost = createAsyncThunk(
    "posts/addPost",
    async (data: PostType, thunkApi) => {
      try {
        const response = await sendHttpRequest.create("posts", data);
        return response.data;
      } catch (error: any) {
        const message = error.message;
        return thunkApi.rejectWithValue(message);
      }
    }
  );
  
  export const deletePost = createAsyncThunk(
    "posts/deletePost",
    async (id: number, thunkApi) => {
      try {
        await sendHttpRequest.delete(`posts/${id}`);
        return id;
      } catch (error: any) {
        const message = error.message;
        return thunkApi.rejectWithValue(message);
      }
    }
  );