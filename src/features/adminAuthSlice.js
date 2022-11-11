import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authRequest } from "../utils/axiosInstance";
const initialState = {
  admin: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const loginAdmin = createAsyncThunk(
  "admin/LoginAdmin",
  async (admin, thunkAPI) => {
    try {
      const response = await authRequest.post("/admin/login", {
        email: admin.email,
        password: admin.password,
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.message.data.msg;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const AuthAdminCheck = createAsyncThunk(
  "admin/getMe",
  async (_, thunkAPI) => {
    try {
      const response = await authRequest.get("/admin/me");
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.message.data.msg;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const authAdminSlice = createSlice({
  name: "admin auth",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    // Builder Login Admin
    builder.addCase(loginAdmin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginAdmin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.admin = action.payload;
    });
    builder.addCase(loginAdmin.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
    // Builder Check Auth
    builder.addCase(AuthAdminCheck.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(AuthAdminCheck.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.admin = action.payload;
    });
    builder.addCase(AuthAdminCheck.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
  },
});

export const { reset } = authAdminSlice.actions;
export default authAdminSlice.reducer;
