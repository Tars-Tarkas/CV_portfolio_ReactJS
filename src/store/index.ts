import { configureStore } from "@reduxjs/toolkit";
import CVSlice from "./CVSlice";
import PFSlice from "./PFSlice";
import traininSlice from "./traininSlice";

export default configureStore({
  reducer: {
    CV: CVSlice,
    PF: PFSlice,
    training: traininSlice,
  },
});
