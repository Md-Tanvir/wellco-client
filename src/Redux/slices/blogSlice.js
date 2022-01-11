import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Thunk to get data using api here
export const fetchBlogs = createAsyncThunk(
  "course/fetchReviews",
  async () => {
    const response = await fetch("./review.json")
    .then((res) =>
      res.json()
    );
    return response;
  }
);

const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    allBlogs: [],
    status: "idle",
  },

  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.allBlogs = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchReviews.pending, (state, action) => {
      state.status = "pending";
    });
  },
});

export default blogSlice.reducer;
