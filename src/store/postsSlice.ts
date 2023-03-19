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

export const fetchSinglePost = createAsyncThunk("singlePost", async (_id) => {
    try {
        const { data } = await axios.get(`/api/posts/${_id}`);
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
    initialState: [],
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllPosts.fulfilled, (state, action) => {
                return action.payload;
            })
            .addCase(fetchSinglePost.fulfilled, (state, action) => {
                return action.payload;
            })
            .addCase(newPost.fulfilled, (state, action) => {
                return action.payload;
            });
    },
    reducers: {},
})

export const selectAllPosts = (state:any) => {
    return state.posts;
};

export default PostsSlice.reducer;