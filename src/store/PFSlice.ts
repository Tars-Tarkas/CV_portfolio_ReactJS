import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

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
  PFjson: IObject[];
  loading?: boolean | null;
}

interface IObject {
  id: number;
  title: string;
  page: string;
  linkrep: string;
  description: string;
  date: string;
}

const PFSlice = createSlice({
  name: "PF",
  initialState: {
    PFjson: [],
    loading: null,
  } as IPFtype,
  reducers: {
    addWork(state, action) {
      state.PFjson = [...state.PFjson, action.payload];
    },
    removeWork(state, action) {
      state.PFjson = state.PFjson.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
  extraReducers: {
    [fetchPF.pending]: (state) => {
      state.loading = false;
    },
    [fetchPF.fulfilled]: (state, action) => {
      state.PFjson = action.payload;
      state.loading = true;
      console.log(state.PFjson);
    },
    [fetchPF.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { addWork, removeWork } = PFSlice.actions;

export default PFSlice.reducer;
