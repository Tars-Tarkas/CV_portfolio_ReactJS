import { configureStore } from "@reduxjs/toolkit";
import CVSlice from "./CVSlice";
import PFSlice from "./PFSlice";
import traininSlice from "./traininSlice";

export const store = configureStore({
  reducer: {
    CV: CVSlice,
    PF: PFSlice,
    training: traininSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
