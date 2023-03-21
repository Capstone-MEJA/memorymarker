import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import jwtDecode from "jwt-decode";

const initialState = {
  token: localStorage.getItem("token"),
  username: "",
  _id: "",
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
  userLoaded: false,
};

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
      return rejectWithValue(error.response?.data);
    }
  }
);

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
    loadUser(state, action) {
      const token = state.token;
      if (token) {
        const user: any = jwtDecode(token);
        return {
          ...state,
          token: action.payload,
          username: user.username,
          _id: user._id,
          userLoaded: true,
        };
      }
    },
    logoutUser(state, action) {
      localStorage.removeItem("token");
      return {
        ...state,
        token: "",
        username: "",
        _id: "",
        registerStatus: "",
        registerError: "",
        loginStatus: "",
        loginError: "",
        userLoaded: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      return { ...state, registerStatus: "pending" };
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user: any = jwtDecode(action.payload);

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
    builder.addCase(registerUser.rejected, (state, action) => {
      return {
        ...state,
        registerStatus: "rejected",
        registerError: action.payload as string,
      };
    });

    builder.addCase(loginUser.pending, (state, action) => {
      return { ...state, loginStatus: "pending" };
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user: any = jwtDecode(action.payload);

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
