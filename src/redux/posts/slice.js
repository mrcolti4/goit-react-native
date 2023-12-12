import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts } from "./thunk";
import { handleAllPosts } from "./handlers";

const initialState = {
  data: [],
  currentPost: {},
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setActualPosts(state, { payload }) {
      state.data = payload;
    },
    setPost(state, { payload }) {
      state.currentPost = payload;
    },
  },
  extraReducers: (builder) =>
    builder.addCase(getAllPosts.fulfilled, handleAllPosts),
});

export const postsReducer = postsSlice.reducer;
export const { setActualPosts, setPost } = postsSlice.actions;
