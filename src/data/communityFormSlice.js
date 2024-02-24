import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profilePicture: null,
  communityName: "",
  campus: "",
  communityDescription: "",
  selectedTopics: [],
};

const communityFormSlice = createSlice({
  name: "communityForm",
  initialState,
  reducers: {
    updateField: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
    updateSelectedTopics: (state, action) => {
      state.selectedTopics = action.payload;
    },
  },
});

export const { updateField, updateSelectedTopics } = communityFormSlice.actions;

export default communityFormSlice.reducer;
