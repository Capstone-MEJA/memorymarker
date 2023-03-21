import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { isStore } from "../interface";

export const fetchAllPosts = createAsyncThunk("allPosts", async () => {
  try {
    const { data } = await axios.get(`/api/posts`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const fetchSinglePost = createAsyncThunk(
  "singlePost",
  async (_id: string) => {
    try {
      const { data } = await axios.get(`/api/posts/${_id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const newPost = createAsyncThunk(
  "newPost",
  async ({
    title,
    description,
    latitude,
    longitude,
  }: {
    title: string;
    description: string;
    latitude: number | null;
    longitude: number | null;
  }) => {
    try {
      const { data } = await axios.post(`/api/posts`, {
        title,
        description,
        latitude,
        longitude,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updatePost = createAsyncThunk("updatePost", async (postObj) => {
  try {
    const { data } = await axios.put(`/api/posts`, postObj);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const deletePost = createAsyncThunk(
  "deletePost",
  async (_id: string) => {
    try {
      const { data } = await axios.delete(`/api/posts/${_id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

interface isPost {
  _id: string;
  title: string;
  description: string;
  tags: [String];
  latitude: Number;
  longitude: Number;
}
let initialState: isPost[] = [];

export const PostsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPosts.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(fetchSinglePost.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(newPost.fulfilled, (state, action) => {
        return [...state, action.payload];
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        return state.map((post) => {
          if (post._id !== action.payload._id) {
            return post;
          } else {
            return action.payload;
          }
        });
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        return state.filter((post) => post._id !== action.payload._id);
      });
  },
  reducers: {},
});

export const selectAllPosts = (state: isStore) => {
  return state.posts;
};

export default PostsSlice.reducer;
