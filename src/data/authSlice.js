// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayName: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  rememberMe: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setDisplayName: (state, action) => {
      state.displayName = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
    setRememberMe: (state, action) => {
      state.rememberMe = action.payload;
    },
    resetForm: (state) => {
      state.displayName = "";
      state.username = "";
      state.email = "";
      state.password = "";
      state.confirmPassword = "";
      state.rememberMe = false;
    },
  },
});

export const {
  setDisplayName,
  setUsername,
  setEmail,
  setPassword,
  setConfirmPassword,
  setRememberMe,
  resetForm,
} = authSlice.actions;
export default authSlice.reducer;
