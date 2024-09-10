import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../slices/userSlice.js";

export const store = configureStore({
  reducer: combineReducers({
    user: userReducer.reducer,
  }),
});
