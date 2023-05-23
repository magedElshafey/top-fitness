import { configureStore } from "@reduxjs/toolkit";
import langSlice from "./lang";
const store = configureStore({
  reducer: {
    langSlice,
  },
});
export default store;
