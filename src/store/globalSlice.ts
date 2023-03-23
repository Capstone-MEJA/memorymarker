import { createSlice } from "@reduxjs/toolkit";
import { isStore } from "../store";
import { IsPost } from "../interface";

interface isGlobal {
    postForm: boolean;
    editPostForm: boolean;
    selectedPost: IsPost | null;
}

let initialState: isGlobal = {
    postForm: false,
    editPostForm: false,
    selectedPost: null,
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
        }  
    }
})

export const selectGlobal = (state: isStore) => {
    return state.global;
};
  
export const { togglePostForm, toggleEditPostForm, setSelectedPost } = globalSlice.actions;
export default globalSlice.reducer;