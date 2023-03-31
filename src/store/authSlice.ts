import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import jwtDecode from "jwt-decode";
import { IUser } from "../interface";

const initialState = {
  token: localStorage.getItem("token"),
  username: "",
  _id: "",
  registerStatus: "",
  registerError: [],
  loginStatus: "",
  loginError: "",
  userLoaded: false,
};

// a redux thunk that registers a new user into the database, and sets their unique token into localStorage
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (user: { username: string; password: string }, { rejectWithValue }) => {
    try {
      const token = await axios.post("/api/register", {
        username: user.username,
        password: user.password,
      });
      localStorage.setItem("token", token.data);
      return token.data;
    } catch (err) {
      const error = err as AxiosError<Error>;
      console.log(error);
      return rejectWithValue(error.response?.data);
    }
  }
);

// a redux thunk that logs in a user, and sets their unique token into localStorage
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (user: { username: string; password: string }, { rejectWithValue }) => {
    try {
      const token = await axios.post("/api/login", {
        username: user.username,
        password: user.password,
      });
      localStorage.setItem("token", token.data);
      return token.data;
    } catch (err) {
      const error = err as AxiosError<Error>;
      return rejectWithValue(error.response?.data);
    }
  }
);

const authSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // a redux reducer that will load a user's information on login/register when dispatched
    loadUser(state, action) {
      const token = state.token;
      if (token) {
        const user: IUser = jwtDecode(token);
        return {
          ...state,
          token: action.payload,
          username: user.username,
          _id: user._id,
          userLoaded: true,
        };
      }
    },
    // a redux reducer that will logout a user when dispatched
    logoutUser(state, action) {
      localStorage.removeItem("token");
      return {
        ...state,
        token: "",
        username: "",
        _id: "",
        registerStatus: "",
        registerError: [],
        loginStatus: "",
        loginError: "",
        userLoaded: false,
      };
    },
  },
  extraReducers: (builder) => {
    // when the registerUser thunk is pending, set the registerStatus state to "pending"
    builder.addCase(registerUser.pending, (state, action) => {
      return { ...state, registerStatus: "pending" };
    });
    // when the registerUser thunk is fulfilled, set state with the user's details
    builder.addCase(registerUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user: IUser = jwtDecode(action.payload);
        return {
          ...state,
          token: action.payload,
          username: user.username,
          _id: user._id,
          registerStatus: "success",
        };
      } else {
        return state;
      }
    });
    // when the registerUser thunk is rejected, set the registerStatus state to "rejected"
    builder.addCase(registerUser.rejected, (state, action) => {
      return {
        ...state,
        registerStatus: "rejected",
        registerError: action.payload as [],
      };
    });
    // when the loginUser thunk is pending, set the loginStatus state to "pending"
    builder.addCase(loginUser.pending, (state, action) => {
      return { ...state, loginStatus: "pending" };
    });
    // when the loginUser thunk is fulfilled, set state with the user's details
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user: IUser = jwtDecode(action.payload);
        return {
          ...state,
          token: action.payload,
          username: user.username,
          _id: user._id,
          loginStatus: "success",
        };
      } else {
        return state;
      }
    });
    // when the loginUser thunk is rejected, set the loginStatus state to "rejected"
    builder.addCase(loginUser.rejected, (state, action) => {
      return {
        ...state,
        loginStatus: "rejected",
        loginError: action.payload as string,
      };
    });
  },
});

export const { loadUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
