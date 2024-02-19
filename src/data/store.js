import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "../data/eventSlice";
import filterReducer from "./filterSlice";
import authReducer from "../data/authSlice";
const store = configureStore({
  reducer: {
    event: eventReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});

export default store;