// eventFormSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eventPicture: null,
  eventName: "",
  eventDescription: "",
  eventVenue: "",
  eventDate: "",
  eventStartTime: "",
  eventEndTime: "",
};

const eventFormSlice = createSlice({
  name: "eventForm",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
  },
});

export const { updateField, validateForm } = eventFormSlice.actions;
export default eventFormSlice.reducer;
