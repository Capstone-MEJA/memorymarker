import { createSlice } from "@reduxjs/toolkit";
import { isStore } from "../store";

interface isGlobal {
    postForm: boolean;
    editPostForm: boolean;
}

let initialState: isGlobal = {
    postForm: false,
    editPostForm: false,
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
        }
    }
})

export const selectGlobal = (state: isStore) => {
    return state.global;
};
  
export const { togglePostForm, toggleEditPostForm } = globalSlice.actions;
export default globalSlice.reducer;