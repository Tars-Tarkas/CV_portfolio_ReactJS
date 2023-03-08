import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const jfile = "../cv.json";

export const fetchCV: any = createAsyncThunk("CV/fetchCV", async function () {
  const res = await fetch(jfile, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((data) => data.json());
  return res;
});

interface ICVtype {
  CVjson: [];
  loading: boolean | null;
}

const CVSlice = createSlice({
  name: "CV",
  initialState: {
    CVjson: [],
    loading: null,
  } as ICVtype,
  reducers: {},
  extraReducers: {
    [fetchCV.pending]: (state) => {
      state.loading = false;
    },
    [fetchCV.fulfilled]: (state, action) => {
      state.CVjson = action.payload;
      state.loading = true;
    },
    [fetchCV.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default CVSlice.reducer;
