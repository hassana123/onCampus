import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  selectedLocation: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSelectedLocation: (state, action) => {
      state.selectedLocation = action.payload;
    },
    performSearch: (state) => {
      const { searchTerm, selectedLocation, events } = state;

      // Perform search logic
      const filteredEvents = events.filter((event) => {
        const searchTermMatch = event.eventHeader
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const locationMatch = selectedLocation
          ? event.location.toLowerCase() === selectedLocation.toLowerCase()
          : true;

        return searchTermMatch && locationMatch;
      });

      // Update searchResults in the state
      state.searchResults = filteredEvents;
    },
  },
});

export const { setSearchTerm, setSelectedLocation, performSearch } =
  filterSlice.actions;
export default filterSlice.reducer;
