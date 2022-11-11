import { configureStore } from "@reduxjs/toolkit";
import authAdminReducer from "../features/adminAuthSlice";
import authUserReducer from "../features/UserAuthSlice";

export const store = configureStore({
  reducer: {
    authAdmin: authAdminReducer,
    authUser: authUserReducer,
  },
});
