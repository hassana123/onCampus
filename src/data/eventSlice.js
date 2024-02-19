// eventSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { eventData } from "./EventsData";

const initialState = {
  eventData,
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    updateEventData: (state, action) => {
      state.eventData = action.payload;
    },
  },
});

export const { updateEventData } = eventSlice.actions;
export default eventSlice.reducer;
