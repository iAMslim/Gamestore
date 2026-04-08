import { createSlice } from "@reduxjs/toolkit";
import { api } from "../api";

const videoGamesSlice = createSlice({
  name: "videogames",
  initialState: [],
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getVideoGames.matchFulfilled,
      (state, { payload }) => {
        return payload.results || [];
      }
    );
  },
});

export default videoGamesSlice.reducer;
