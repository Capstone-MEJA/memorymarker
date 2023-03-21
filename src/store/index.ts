import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import postsSlice from "./postsSlice";
import usersSlice from "./usersSlice";

const store = configureStore({
  reducer: {
    posts: postsSlice,
    users: usersSlice,
    auth: authSlice,
  },
});

export default store;