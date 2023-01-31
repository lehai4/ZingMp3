import { configureStore } from "@reduxjs/toolkit";
import songListSlide from "./songListSlide.js";
const store = configureStore({
  reducer: {
    songs: songListSlide,
  },
});
export default store;
