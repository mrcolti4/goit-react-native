import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register } from "./thunk";

const initialState = {
  user: {},
};

const handleLogin = (state, { payload }) => {
  state.user = payload;
};

const handleLogout = (state) => {
  state.user = null;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(register.fulfilled, handleLogin)
      .addCase(logout.fulfilled, handleLogout)
      .addCase(login.fulfilled, handleLogin),
});

export const authReducer = authSlice.reducer;
