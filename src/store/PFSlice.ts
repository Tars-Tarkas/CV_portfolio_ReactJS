import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const jfile = "../PF.json";

export const fetchPF: any = createAsyncThunk("PF/fetchPF", async function () {
  const res = await fetch(jfile, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((data) => data.json());
  return res;
});

interface IPFtype {
  PFjson: [];
  loading: boolean | null;
}

const PFSlice = createSlice({
  name: "PF",
  initialState: {
    PFjson: [],
    loading: null,
  } as IPFtype,
  reducers: {},
  extraReducers: {
    [fetchPF.pending]: (state) => {
      state.loading = false;
    },
    [fetchPF.fulfilled]: (state, action) => {
      state.PFjson = action.payload;
      state.loading = true;
    },
    [fetchPF.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default PFSlice.reducer;
