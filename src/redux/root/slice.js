import { createSlice } from "@reduxjs/toolkit";
import { handlePending, handleRejected } from "./handlers";
const initialState = {
  isLoading: false,
  error: null,
};

const rootSlice = createSlice({
  name: "root",
  initialState,
  extraReducers: (builder) =>
    builder
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      ),
});

export const rootReducer = rootSlice.reducer;
