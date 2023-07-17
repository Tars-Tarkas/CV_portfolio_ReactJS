import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IPFtype } from "../types/PFTypes";
import { IObject } from "../types/PFTypes";

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

const PFSlice = createSlice({
  name: "PF",
  initialState: {
    PFjson: [],
    loading: false,
    error: null,
    isEdit: false,
    editWorkId: "",
  } as IPFtype,
  reducers: {
    addWork(state, action: PayloadAction<IObject>) {
      state.PFjson = [
        (action.payload = {
          id: action.payload.id,
          title: action.payload.title,
          page: action.payload.page,
          linkrep: action.payload.linkrep,
          description: action.payload.description,
          stack: action.payload.stack,
        }),
        ...state.PFjson,
      ];
      state.isEdit = false;
    },
    updateWork(state, action: PayloadAction<IObject>) {
      const { id, title, page, linkrep, description, stack } = action.payload;
      const updatedWork = state.PFjson.find((todo) => todo?.id === id);
      if (updatedWork !== undefined) {
        updatedWork.title = title;
        updatedWork.page = page;
        updatedWork.linkrep = linkrep;
        updatedWork.description = description;
        updatedWork.stack = stack;
      }
    },

    removeWork(state, action) {
      state.PFjson = state.PFjson.filter(
        (item) => item.id !== action.payload.id
      );
    },
    editWork(state, { payload: { editedWork } }) {
      state.PFjson = state.PFjson.map((item) =>
        item.id === editedWork.id ? editedWork : item
      );
      state.editWorkId = editedWork.item;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPF.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchPF.fulfilled, (state, action) => {
      state.PFjson = action.payload;
      state.error = null;
      state.loading = false;
    });
    builder.addCase(fetchPF.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { addWork, removeWork, editWork, updateWork } = PFSlice.actions;

export default PFSlice.reducer;
