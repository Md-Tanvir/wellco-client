import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Thunk to get data using api here
export const fetchReviews = createAsyncThunk(
  "course/fetchReviews",
  async () => {
    const response = await fetch("./review.json")
    .then((res) =>
      res.json()
    );
    return response;
  }
);

const reviewSlice = createSlice({
  name: "reviews",
  initialState: {
    allReviews: [],
    status: "idle",
  },

  extraReducers: (builder) => {
    builder.addCase(fetchReviews.fulfilled, (state, action) => {
      state.allReviews = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchReviews.pending, (state, action) => {
      state.status = "pending";
    });
  },
});

export default reviewSlice.reducer;
