import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const filterReducer = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    filterArticles: (_, { payload }) => payload,
  },
});

export const articlesApi = createApi({
  reducerPath: "Articles",
  tagTypes: ["Articles"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spaceflightnewsapi.net/v3/articles",
  }),
  endpoints: (builder) => ({
    getArticlesByQuery: builder.query({
      query: (query) => ({
        url: `/`,
        method: "GET",
        params: { _limit: 12, title_contains: query },
      }),
      providesTags: ["Articles"],
    }),
    getArticleById: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
      providesTags: ["Articles"],
    }),
    getArticlesCount: builder.query({
      query: (query) => ({
        url: `/count`,
        method: "GET",
        params: { title_contains: query },
      }),
      providesTags: ["Articles"],
    }),
  }),
});

export const {
  useGetArticlesByQueryQuery,
  useGetArticleByIdQuery,
  useGetArticlesCountQuery,
} = articlesApi;
export const { filterArticles } = filterReducer.actions;
