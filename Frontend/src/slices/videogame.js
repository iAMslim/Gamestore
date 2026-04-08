import { createSlice } from "@reduxjs/toolkit";
import { api } from "../api";

const videoGameSlice = createSlice({
  name: "videoGameSlice",
  initialState: [],
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getVideoGames.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
  },
});

export default videoGameSlice.reducer;
