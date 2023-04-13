import fetchReducer, { fetchPF } from "../PFSlice";

import { IPFtype } from "../../types/PFTypes";

const initialState: IPFtype = {
  PFjson: [],
  loading: false,
  error: null,
  isEdit: false,
  editWorkId: "",
};

describe("PFSlice", () => {
  it("FetchPF.pending", () => {
    const state = fetchReducer(initialState, fetchPF.pending());
    expect(state.loading).toBe(true);
    expect(state.error).toBeNull();
  });

  it("FetchPF.fulfilled", () => {
    const mockData = [
      {
        id: 1,
        title: "Заголовок",
        page: "https://",
        linkrep: "https://",
        description: "Описание.",
        stack: ["Typescript"],
      },
    ];
    const state = fetchReducer(initialState, fetchPF.fulfilled(mockData));

    expect(state).toEqual({
      PFjson: mockData,
      loading: false,
      error: null,
      isEdit: false,
      editWorkId: "",
    });
  });

  it("FetchPF.rejected", () => {
    const state = fetchReducer(initialState, fetchPF.rejected("Server Error!"));
    expect(state).toEqual({
      PFjson: [],
      loading: false,
      error: "Server Error!",
      isEdit: false,
      editWorkId: "",
    });
  });
});
