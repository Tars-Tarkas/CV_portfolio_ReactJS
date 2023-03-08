import { configureStore } from "@reduxjs/toolkit";
import CVSlice from "./CVSlice";
import PFSlice from "./PFSlice";

export default configureStore({
  reducer: {
    CV: CVSlice,
    PF: PFSlice,
  },
});
