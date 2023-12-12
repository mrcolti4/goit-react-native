import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDataFromFirestore } from "../../api/dbApi";

export const getAllPosts = createAsyncThunk(
  "posts/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getDataFromFirestore();

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
