import { createSlice } from "@reduxjs/toolkit";
import { eventData } from "./EventsData";

const initialState = {
  searchTerm: "",
  selectedLocation: "",
  eventData: eventData,
  searchResults: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateEventData: (state, action) => {
      state.searchResults = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSelectedLocation: (state, action) => {
      state.selectedLocation = action.payload;
    },
    performSearch: (state) => {
      const { searchTerm, selectedLocation } = state;

      const filteredEvents = eventData.filter((event) => {
        const searchTermMatch =
          event.eventHeader.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.eventDesc.toLowerCase().includes(searchTerm.toLowerCase());
        const locationMatch = selectedLocation
          ? event.eventLocation.toLowerCase() === selectedLocation.toLowerCase()
          : true;

        return searchTermMatch && locationMatch;
      });

      state.searchResults = filteredEvents;
    },
  },
});

export const { setSearchTerm, setSelectedLocation, performSearch } =
  filterSlice.actions;
export default filterSlice.reducer;
