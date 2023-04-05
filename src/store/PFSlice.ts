import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const jfile = "../../public/PF.json";

export const fetchPF: any = createAsyncThunk(
  "PF/fetchPF",
  async function (_, { rejectWithValue }) {
    try {
      const res = await fetch("./PF.json", {
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

interface IPFtype {
  PFjson: IObject[];
  loading: boolean | null;
  error: string | null;
}

interface IObject {
  id?: Date;
  title?: string;
  page?: string;
  linkrep?: string;
  description?: string;
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
      state.PFjson = [...state.PFjson, action.payload];
    },

    removeWork(state, action) {
      state.PFjson = state.PFjson.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPF.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchPF.fulfilled, (state, action) => {
      state.PFjson = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchPF.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { addWork, removeWork } = PFSlice.actions;

export default PFSlice.reducer;
