//This file manages all the variables that might be useful to keep as global variables instead of props because of their frequency of use

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
    togglePostForm: (state) => {
      state.postForm = !state.postForm;
    },
    toggleEditPostForm: (state) => {
      state.editPostForm = !state.editPostForm;
    },
    setSelectedPost: (state, action) => {
      state.selectedPost = action.payload;
    },
    setLat: (state, action) => {
      state.position.lat = action.payload;
    },
    setLng: (state, action) => {
      state.position.lng = action.payload;
    },
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
