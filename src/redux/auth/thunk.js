import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerDB } from "../../api/authApi";

export const register = createAsyncThunk(
  "auth/register",
  async (body, { rejectWithValue }) => {
    try {
      const { user } = await registerDB(body);
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
