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

export type RootState = ReturnType<typeof store.getState>;

//define the type of useDispatch and export to Map
export type AppDispatch = typeof store.dispatch;

export interface isStore {
  posts: object[];
  users: object[];
  auth: object;
}
