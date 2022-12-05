import { PostTypeWithTimestamp } from "../../models/PostModel";

export type PostState = {
    error: string | null;
    loading: boolean;
    postsData: PostTypeWithTimestamp[] | null;
  };