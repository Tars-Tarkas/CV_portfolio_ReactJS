import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const jfile = "../PF.json";

export const fetchPF: any = createAsyncThunk(
  "PF/fetchPF",
  async function (_, { rejectWithValue }) {
    try {
      const res = await fetch(jfile, {
        method: "POST",
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

interface IPFtype {
  PFjson: IObject[];
  loading: boolean | null;
  error: boolean | null;
}

interface IObject {
  id: Date;
  title: string;
  page: string;
  linkrep: string;
  description: string;
  stack?: string[];
}

const PFSlice = createSlice({
  name: "PF",
  initialState: {
    PFjson: [],
    loading: null,
    error: null,
  } as IPFtype,
  reducers: {
    addWork(state, action) {
      // state.PFjson = [...state.PFjson, action.payload];
      state.PFjson.push({
        id: action.payload.id,
        title: action.payload.title,
        page: action.payload.page,
        linkrep: action.payload.linkrep,
        description: action.payload.description,
        stack: action.payload.stack,
      });
    },
    removeWork(state, action) {
      state.PFjson = state.PFjson.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
  extraReducers: {
    [fetchPF.pending]: (state) => {
      state.loading = true;
    },
    [fetchPF.fulfilled]: (state, action) => {
      state.PFjson = action.payload;
      state.error = false;
      state.loading = false;
    },
    [fetchPF.rejected]: (state) => {
      state.error = true;
    },
  },
});

export const { addWork, removeWork } = PFSlice.actions;

export default PFSlice.reducer;
