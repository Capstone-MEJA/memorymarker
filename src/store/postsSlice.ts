import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { isStore } from "../store";

// a redux thunk that fetches all posts from the database
export const fetchAllPosts = createAsyncThunk("allPosts", async () => {
  try {
    const { data } = await axios.get(`/api/posts`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

// a redux thunk that fetches a single post from the database
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

// a redux thunk that creates a new post and saves it to the database
export const newPost = createAsyncThunk(
  "newPost",
  async ({
    title,
    description,
    latitude,
    longitude,
    user,
    tags,
  }: {
    title: string;
    description: string;
    latitude: number | null;
    longitude: number | null;
    user: string;
    tags: string[];
  }) => {
    try {
      const { data } = await axios.post(`/api/posts`, {
        title,
        description,
        latitude,
        longitude,
        user,
        tags,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

// a redux thunk that updates a single post and saves it to the database
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
  async ({ id, userId, like }: { id: string; userId: string; like: number }) => {
    try {
      const { data } = await axios.put(`/api/posts/${id}`, { like, userId });
      // console.log(data)
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

// a redux thunk that deletes a single post from the database
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
  tags: string[];
  latitude: number;
  longitude: number;
  createdAt: number;
  timeStamp: string;
  favoriteCount: number;
  favoritedUsers: string[];
}

let initialState: isPost[] = [];

export const PostsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // when the fetchAllPosts thunk is fulfilled, set the state to an array of all posts
      .addCase(fetchAllPosts.fulfilled, (state, action) => {
        return action.payload;
      })
      // when the fetchSinglePost thunk is fulfilled, set the state to that single post being requested
      .addCase(fetchSinglePost.fulfilled, (state, action) => {
        return action.payload;
      })
      // when the newPost thunk is fulfilled, spread the state and add the new post
      .addCase(newPost.fulfilled, (state, action) => {
        return [...state, action.payload];
      })
      // when the updatePost thunk is fulfilled, return the state with the updated post
      .addCase(updatePost.fulfilled, (state, action) => {
        return state.map((post) => {
          if (post._id === action.payload._id) {
            return action.payload;
          } else {
            return post;
          }
        });
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
      // when the deletePost thunk is fulfilled, return the state without the deleted post
      .addCase(deletePost.fulfilled, (state, action) => {
        return state.filter((post) => post._id !== action.payload._id);
      });
  },
});

export const selectAllPosts = (state: isStore) => {
  return state.posts;
};

export default PostsSlice.reducer;
