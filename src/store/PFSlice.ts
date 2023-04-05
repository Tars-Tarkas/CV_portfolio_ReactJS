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
  isEdit: boolean;
}

interface IObject {
  id: number;
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
    isEdit: false,
    editWorkId: "",
  } as IPFtype,
  reducers: {
    addWork(state, action) {
      state.PFjson = [...state.PFjson, action.payload];
      state.isEdit = action.payload.isEdit;
    },

    removeWork(state, action) {
      state.PFjson = state.PFjson.filter(
        (item) => item.id !== action.payload.id
      );
    },
    editWork(state, action) {
      const editWork = action.payload;
      let newWork = state.PFjson.find((item) => item.id === editWork.id);
      return { ...state, isEdit: action.payload.isEdit, editWork: newWork };
    },
    updateWork(state, action) {
      const { id, title, page, linkrep, description, stack } = action.payload;
      const works = state.PFjson.filter((item) => {
        return item.id !== id;
      });
      let work = state.PFjson.find((item) => item.id === id)!;
      // work = action.payload;
      work.title = title;
      work.page = page;
      work.linkrep = linkrep;
      work.description = description;
      work.stack = stack;
      works.push(work as IObject);
      return { ...state, PFjson: [...works], isEdit: false };
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

export const { addWork, removeWork, updateWork, editWork } = PFSlice.actions;

export default PFSlice.reducer;
