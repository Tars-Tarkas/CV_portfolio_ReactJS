import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const jfile = "../training.json";

export const fetchTraining: any = createAsyncThunk(
  "Training/fetchTraining",
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

interface ICVtype {
  trainingJson: [];
  loading: boolean | null;
  error: boolean | null;
}

const trainingSlice = createSlice({
  name: "training",
  initialState: {
    trainingJson: [],
    loading: null,
    error: null,
  } as ICVtype,
  reducers: {},
  extraReducers: {
    [fetchTraining.pending]: (state) => {
      state.loading = true;
    },
    [fetchTraining.fulfilled]: (state, action) => {
      state.trainingJson = action.payload;
      state.loading = false;
      state.error = false;
    },
    [fetchTraining.rejected]: (state) => {
      state.error = true;
    },
  },
});

export default trainingSlice.reducer;
