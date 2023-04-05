import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const jfile = "../training.json";

export const fetchTraining: any = createAsyncThunk(
  "Training/fetchTraining",
  async function (_, { rejectWithValue }) {
    try {
      const res = await fetch(jfile, {
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

interface ICVtype {
  trainingJson: [];
  loading: boolean | null;
  error: string | null;
}

const trainingSlice = createSlice({
  name: "training",
  initialState: {
    trainingJson: [],
    loading: null,
    error: null,
  } as ICVtype,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTraining.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchTraining.fulfilled, (state, action) => {
      state.trainingJson = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchTraining.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default trainingSlice.reducer;
