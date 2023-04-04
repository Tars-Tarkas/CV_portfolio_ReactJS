import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const jfile = "./cv.json";

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
      return rejectWithValue(error);
    }
  }
);

interface ICVtype {
  CVjson: [];
  loading: boolean | null;
  error: boolean | null;
}

const CVSlice = createSlice({
  name: "CV",
  initialState: {
    CVjson: [],
    loading: null,
    error: null,
  } as ICVtype,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCV.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCV.fulfilled, (state, action) => {
      state.CVjson = action.payload;
      state.error = false;
      state.loading = false;
    });
    builder.addCase(fetchCV.rejected, (state, action) => {
      state.error = true;
    });
  },
  // extraReducers: {
  //   [fetchCV.pending]: (state) => {
  //     state.loading = true;
  //   },
  //   [fetchCV.fulfilled]: (state, action) => {
  //     state.CVjson = action.payload;
  //     state.loading = false;
  //     state.error = false;
  //   },
  //   [fetchCV.rejected]: (state) => {
  //     state.error = true;
  //   },
  // },
});

export default CVSlice.reducer;