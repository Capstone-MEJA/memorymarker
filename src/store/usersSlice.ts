import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IsUser } from "../interface";
import { isStore } from "../store";
import { updateObj } from "../features/pages/EditAccount";
import { loadUser } from "./authSlice";

export const fetchAllUsers = createAsyncThunk("allUsers", async () => {
  try {
    const { data } = await axios.get(`/api/users`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const fetchSingleUser = createAsyncThunk("singleUser", async (_id) => {
  try {
    const { data } = await axios.get(`/api/users/${_id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const newUser = createAsyncThunk("newUser", async (postObj) => {
  try {
    const { data } = await axios.post(`/api/users`, postObj);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const updateUser = createAsyncThunk(
  "updateUser",
  async (updateObj: updateObj, thunkAPI) => {
    try {
      const token = window.localStorage.getItem("token");
      const { data } = await axios.put(
        `/api/users`,
        updateObj,
        { headers: { authorization: token } }
      );
      thunkAPI.dispatch(loadUser())
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteUser = createAsyncThunk("deleteUser", async (_id) => {
  try {
    const { data } = await axios.delete(`/api/users/${_id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

let initialState: IsUser[] = [];

export const UsersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(fetchSingleUser.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(newUser.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        console.log(action.payload)
        return state.map((user) => {
          if (user._id !== action.payload._id) {
            return user;
          } else {
            return action.payload;
          }
        });
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        return state.filter((user) => user._id !== action.payload);
      });
  },
  reducers: {},
});

export const selectAllUsers = (state: isStore) => {
  return state.users;
};

export default UsersSlice.reducer;
