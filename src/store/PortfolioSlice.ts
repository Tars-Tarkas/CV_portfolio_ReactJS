import { createSlice } from "@reduxjs/toolkit";

const PortfolioSlice = createSlice({
  name: "Portfolio",
  initialState: {
    Portfolio: [],
  },
  reducers: {
    AddPost(state, action) {
      state.Portfolio.push();
    },
    RemovePost(state, action) {
        state.Portfolio
    },
  },
});
