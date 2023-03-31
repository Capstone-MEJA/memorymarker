import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { isStore } from "../store";

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
    user,
  }: {
    title: string;
    description: string;
    latitude: number | null;
    longitude: number | null;
    user: string;
  }) => {
    try {
      const { data } = await axios.post(`/api/posts`, {
        title,
        description,
        latitude,
        longitude,
        user
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updatePost = createAsyncThunk(
  "updatePost",
  async ({
    _id,
    title,
    description,
  }: {
    _id?: string;
    title?: string;
    description?: string;
    // latitude: number | null;
    // longitude: number | null;
  }) => {
    try {
      const { data } = await axios.put(`/api/posts/${_id}`, {
        _id,
        title,
        description,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const favoritePost = createAsyncThunk(
  "favoritePost",
  async (_id: string) => {
    try {
      const { data } = await axios.put(`/api/posts/${_id}`, { like: 1 });
      // console.log(data)
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

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
  user: object;
  tags: [string];
  latitude: number;
  longitude: number;
  createdAt: number;
  timeStamp: string;
  favoriteCount: number;
  favoritedUsers: [string];
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
        // console.log("payload", action.payload);
        // find the index of the post you are updating
        // update only that index
        // spread the rest of the array

        return state.map((post) => {
          if (post._id === action.payload._id) {
            return action.payload;
          } else {
            return post;
          }
        });
        // return state;
        // return state.map((post) => {
        //   if (post._id !== action.payload._id) {
        //     return post;
        //   } else {
        //     return action.payload;
        //   }
        // });
        // return [...state, action.payload];
      })
      .addCase(favoritePost.fulfilled, (state, action) => {
        return state.map((post) => {
          if (post._id === action.payload._id) {
            return action.payload;
          } else {
            return post;
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
