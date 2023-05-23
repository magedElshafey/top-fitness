import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  lang: JSON.parse(window.localStorage.getItem("lang")) || "en",
};
const langSlice = createSlice({
  name: "langSlice",
  initialState,
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload;
      window.localStorage.setItem("lang", JSON.stringify(state.lang));
    },
  },
});
export const { changeLang } = langSlice.actions;
export default langSlice.reducer;
