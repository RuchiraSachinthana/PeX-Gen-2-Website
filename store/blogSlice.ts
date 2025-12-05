"use client";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const BLOGS_ENDPOINT = "https://pex-sooty.vercel.app/api/blogs";

export interface Blog {
  _id: string;
  title: string;
  hero_img: string;
  sub_title_1: string;
  paragraph_1: string;
  sub_title_2?: string;
  paragraph_2?: string;
  img_url_2?: string;
  created_at: string;
  updated_at?: string;
  sub_title_3?: string;
  paragraph_3?: string;
  final_thought?: string;
  about_the_author?: string;
}

export interface Pagination {
  current_page: number;
  total_pages: number;
  total_blogs: number;
  per_page: number;
  has_next: boolean;
  has_prev: boolean;
}

interface BlogApiResponse {
  success: boolean;
  data: Blog[];
  pagination: Pagination;
}

interface FetchBlogsArgs {
  page?: number;
  limit?: number;
  force?: boolean;
}

interface BlogState {
  items: Blog[];
  pagination: Pagination | null;
  currentPage: number;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  lastFetchedAt: number | null;
}

const initialState: BlogState = {
  items: [],
  pagination: null,
  currentPage: 1,
  status: "idle",
  error: null,
  lastFetchedAt: null,
};

export const fetchBlogs = createAsyncThunk<
  BlogApiResponse,
  FetchBlogsArgs | undefined,
  { rejectValue: string }
>("blog/fetchBlogs", async (args, { rejectWithValue }) => {
  const page = args?.page ?? 1;
  const limit = args?.limit ?? 10;

  try {
    const response = await fetch(
      `${BLOGS_ENDPOINT}?page=${page}&limit=${limit}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Failed to fetch blogs");
    }

    const payload: BlogApiResponse = await response.json();
    if (!payload.success) {
      throw new Error("Unexpected response while fetching blogs");
    }

    return payload;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error fetching blogs";
    return rejectWithValue(message);
  }
});

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    clearBlogs(state) {
      state.items = [];
      state.pagination = null;
      state.currentPage = 1;
      state.status = "idle";
      state.error = null;
      state.lastFetchedAt = null;
    },
    addBlog(state, action) {
      const blog = action.payload;
      // Only add if it doesn't already exist
      if (!state.items.find((b) => b._id === blog._id)) {
        state.items.push(blog);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state, action) => {
        if (action.meta.arg?.force) {
          state.status = "loading";
        } else if (state.status === "idle") {
          state.status = "loading";
        }
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.items = action.payload.data;
        state.pagination = action.payload.pagination;
        state.currentPage = action.payload.pagination.current_page;
        state.status = "succeeded";
        state.lastFetchedAt = Date.now();
        state.error = null;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload ?? "Failed to fetch blogs";
      });
  },
});

export const { setCurrentPage, clearBlogs, addBlog } = blogSlice.actions;
export default blogSlice.reducer;

