import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./postsSlice";
import usersSlice from "./usersSlice";

const store = configureStore({
    reducer: {
      posts: postsSlice,
      users: usersSlice
    }
});
  
export default store;

export type RootState = ReturnType<typeof store.getState>

//define the type of useDispatch and export to Map
export type AppDispatch = typeof store.dispatch