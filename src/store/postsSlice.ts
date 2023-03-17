import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllPosts = createAsyncThunk("allPosts", async () => {
    try {
        const { data } = await axios.get(`/api/posts`);
        return data;
    } catch (error) {
        console.log(error);
    }
});

export const newPost = createAsyncThunk("newPost", async (postObj) => {
    try {
        const { data } = await axios.post(`/api/posts`, postObj);
        return data;
    } catch (error) {
        console.log(error);
    }
});

export const PostsSlice = createSlice({
    name: "posts",
    initialState: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchAllPosts.fulfilled, (state, action) => {
            return action.payload;
        })
        .addCase(newPost.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export const selectPosts = (state) => {
    return state.posts;
};

export default PostsSlice.reducer;