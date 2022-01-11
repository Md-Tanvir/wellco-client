import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./slices/blogSlice";
import courseSlice from "./slices/courseSlice";
import reviewSlice from "./slices/reviewSlice";


export const store = configureStore({
    reducer:{
        courses:courseSlice,
        reviews:reviewSlice,
        blogs:blogSlice
    }
})