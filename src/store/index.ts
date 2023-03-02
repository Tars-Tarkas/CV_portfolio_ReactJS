import { configureStore } from "@reduxjs/toolkit";
import CVSlice from "./CVSlice";
// import PortfolioSlice from "./PortfolioSlice";

export default configureStore({
  reducer: {
    CV: CVSlice,
  },
});
