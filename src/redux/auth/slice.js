import { createSlice } from "@reduxjs/toolkit";
import { register } from "./thunk";

const initialState = {
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) =>
    builder.addCase(register.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
    }),
});

export const authReducer = authSlice.reducer;
