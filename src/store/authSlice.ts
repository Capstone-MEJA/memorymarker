import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  username: "",
  _id: "",
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
  userLoaded: false,
};

const authSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default authSlice.reducer;
