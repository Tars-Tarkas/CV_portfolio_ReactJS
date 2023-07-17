import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ICVtype } from "../types/cvTypes";

export const fetchCV: any = createAsyncThunk(
  "CV/fetchCV",
  async function (_, { rejectWithValue }) {
    try {
      const res = await fetch("./cv.json", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Server Error!");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const CVSlice = createSlice({
  name: "CV",
  initialState: {
    CVjson: [],
    loading: false,
    error: "",
  } as ICVtype,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCV.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchCV.fulfilled, (state, action) => {
      state.CVjson = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchCV.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default CVSlice.reducer;
