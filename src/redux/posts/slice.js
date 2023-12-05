import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts } from "./thunk";
import { handleAllPosts } from "./handlers";

const initialState = {
  data: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) =>
    builder.addCase(getAllPosts.fulfilled, handleAllPosts),
});

export const postsReducer = postsSlice.reducer;
