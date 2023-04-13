import PFReducer, {
  addWork,
  editWork,
  removeWork,
  updateWork,
} from "../PFSlice";

const initialState = {
  PFjson: [],
  loading: false,
  error: null,
  isEdit: false,
  editWorkId: "",
};
describe("PFSlice", () => {
  it("should return default state", () => {});

  const result = PFReducer(undefined, { type: "" });
  expect(result).toEqual(initialState);

  //   it("shoult add new work with 'addWork' action ", () => {
  //     const action = { type: addWork.type, payload: "" };
  //     const result = PFReducer(initialState, action);
  //   });
});
