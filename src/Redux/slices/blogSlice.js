import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Thunk to get data using api here
export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const response = await fetch("http://localhost:5000/blogs").then((res) => res.json());
  return response;
});

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
    builder.addCase(fetchBlogs.pending, (state, action) => {
      state.status = "pending";
    });
  },
});

export default blogSlice.reducer;
