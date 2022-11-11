import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authRequest } from "../utils/axiosInstance";

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const loginUser = createAsyncThunk(
  "user/LoginUser",
  async (user, thunkAPI) => {
    try {
      const response = await authRequest.post("/login", {
        email: user.email,
        password: user.password,
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.message;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const UserCheck = createAsyncThunk("user/getMe", async (_, thunkAPI) => {
  try {
    const response = await authRequest.get("/me");
    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.response.data.msg;
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const authUserSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    // Builder Login User
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
    // Builder Check Auth
    builder.addCase(UserCheck.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(UserCheck.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(UserCheck.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
  },
});

export const { reset } = authUserSlice.actions;
export default authUserSlice.reducer;
