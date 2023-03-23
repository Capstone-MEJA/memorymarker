import { configureStore } from "@reduxjs/toolkit";
import { IsPost, IsUser } from "../interface";
import authSlice from "./authSlice";
import postsSlice from "./postsSlice";
import usersSlice from "./usersSlice";
import globalSlice from "./globalSlice";

const store = configureStore({
  reducer: {
    posts: postsSlice,
    users: usersSlice,
    auth: authSlice,
    global: globalSlice,
    global: globalSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

//define the type of useDispatch and export to Map
export type AppDispatch = typeof store.dispatch;

export interface isStore {
  posts: IsPost[];
  users: IsUser[];
  auth: object;
  global: object;
}
