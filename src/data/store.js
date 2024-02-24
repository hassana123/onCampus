import { configureStore } from "@reduxjs/toolkit";
import eventFormReducer from "./eventFormSlice";
import filterReducer from "./filterSlice";
import authReducer from "../data/authSlice";
import communityFormReducer from "./communityFormSlice";
const store = configureStore({
  reducer: {
    filter: filterReducer,
    auth: authReducer,
    eventForm: eventFormReducer,
    communityForm: communityFormReducer,
  },
});

export default store;
