import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./postsSlice";

const store = configureStore({
    reducer: {
      posts: postsSlice,
    }
});
  
export default store;

export type RootState = ReturnType<typeof store.getState>

//define the type of useDispatch and export to Map
export type AppDispatch = typeof store.dispatch