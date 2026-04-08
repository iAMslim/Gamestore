import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SERVER || "http://localhost:8081/api",
  }),
  endpoints: (builder) => ({
    getVideoGames: builder.query({
      query: () => "/video-games",
    }),
    getVideoGame: builder.query({
      query: (id) => `/video-games/${id}`,
    }),
    getBoardGames: builder.query({
      query: () => "/board-games",
    }),
    getBoardGame: builder.query({
      query: (id) => `/board-games/${id}`,
    }),
  }),
});

export const {
  useGetVideoGamesQuery,
  useGetVideoGameQuery,
  useGetBoardGamesQuery,
  useGetBoardGameQuery,
} = api;
