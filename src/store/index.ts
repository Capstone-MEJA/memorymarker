// root redux store
import { configureStore } from "@reduxjs/toolkit";
import { IPost, IUser } from "../interface";
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
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

// define the type of useDispatch()
export type AppDispatch = typeof store.dispatch;

export interface isStore {
  posts: IPost[];
  users: IUser[];
  auth: object;
  global: object;
}
