import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../interface";
import { isStore } from "../store";
import { updateObj } from "../features/pages/EditAccount";
import { loadUser } from "./authSlice";

// a redux thunk that fetches all users from the database
export const fetchAllUsers = createAsyncThunk("allUsers", async () => {
  try {
    const { data } = await axios.get(`/api/users`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

// a redux thunk that fetches a single user from the database
export const fetchSingleUser = createAsyncThunk(
  "singleUser",
  async (_id: string) => {
    try {
      console.log(_id);
      const { data } = await axios.get(`/api/users/${_id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

// a redux thunk that creates a new post and saves it to the database
export const newUser = createAsyncThunk("newUser", async (postObj) => {
  try {
    const { data } = await axios.post(`/api/users`, postObj);
    return data;
  } catch (error) {
    console.log(error);
  }
});

// a redux thunk that updates a single user and saves it to the database
export const updateUser = createAsyncThunk(
  "updateUser",
  async (updateObj: updateObj, thunkAPI) => {
    try {
      const token = window.localStorage.getItem("token");
      const { data } = await axios.put(`/api/users`, updateObj, {
        headers: { authorization: token },
      });
      thunkAPI.dispatch(loadUser(null));
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

// a redux thunk that deletes a single user from the database
export const deleteUser = createAsyncThunk("deleteUser", async (_id) => {
  try {
    const { data } = await axios.delete(`/api/users/${_id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

let initialState: IUser | IUser[] = [];

export const UsersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder
      // when the fetchAllUsers thunk is fulfilled, set the state to an array of all users
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        return action.payload;
      })
      // when the fetchSingleUser thunk is fulfilled, set the state that single user being requested
      .addCase(fetchSingleUser.fulfilled, (state, action) => {
        return action.payload;
      })
      // when the newUser thunk is fulfilled, return the new user
      .addCase(newUser.fulfilled, (state, action) => {
        return action.payload;
      })
      // when the updateUser thunk is fulfilled, if the requested user's id to update matches the requester's user id, return the updated user
      .addCase(updateUser.fulfilled, (state, action) => {
        if (Array.isArray(state)) {
          return state.map((user) => {
            if (user._id !== action.payload._id) {
              return user;
            } else {
              return action.payload;
            }
          });
        }
      })
      // when the deleteUser thunk is fulfilled, return the state without the deleted post
      .addCase(deleteUser.fulfilled, (state, action) => {
        if (Array.isArray(state)) {
          return state.filter((user) => user._id !== action.payload);
        }
      });
  },
  reducers: {},
});

export const selectAllUsers = (state: isStore) => {
  return state.users;
};

export default UsersSlice.reducer;
