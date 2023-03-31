// This file manages state as global variables
// this keeps the application DRY so that props do not have to be passed down many levels

import { createSlice } from "@reduxjs/toolkit";
import { isStore } from "../store";
import { IPost } from "../interface";

interface isGlobal {
  postForm: boolean;
  editPostForm: boolean;
  selectedPost: IPost | null;
  position: {
    lat: number;
    lng: number;
  };
  sideBar: boolean;
}

let initialState: isGlobal = {
  postForm: false,
  editPostForm: false,
  selectedPost: null,
  position: {
    lat: 40.7527277692752,
    lng: -73.97722734175942,
  },
  sideBar: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    // a redux reducer that will toggle the create post form when dispatched
    togglePostForm: (state) => {
      state.postForm = !state.postForm;
    },
    // a redux reducer that will toggle the edit post form when dispatched
    toggleEditPostForm: (state) => {
      state.editPostForm = !state.editPostForm;
    },
    // a redux reducer that will set a post as selected when dispatched
    setSelectedPost: (state, action) => {
      state.selectedPost = action.payload;
    },
    // a redux reducer that will set a latitude when dispatched
    setLat: (state, action) => {
      state.position.lat = action.payload;
    },
    // a redux reducer that will set a longitude when dispatched
    setLng: (state, action) => {
      state.position.lng = action.payload;
    },
    // a redux reducer that will toggle the sidebar view when dispatched
    toggleSideBar: (state) => {
      state.sideBar = !state.sideBar;
    },
  },
});

export const selectGlobal = (state: isStore) => {
  return state.global;
};

export const {
  togglePostForm,
  toggleEditPostForm,
  setSelectedPost,
  setLat,
  setLng,
  toggleSideBar,
} = globalSlice.actions;
export default globalSlice.reducer;
