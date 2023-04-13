import fetchReducer, { fetchCV } from "../CVSlice";

import { ICVtype } from "../../types/cvTypes";

const initialState: ICVtype = {
  CVjson: [],
  loading: false,
  error: null,
};

describe("CVslice", () => {
  it("FetchCV.pending", () => {
    const state = fetchReducer(initialState, fetchCV.pending());
    expect(state.loading).toBe(true);
    expect(state.error).toBe("");
  });

  it("FetchCV.fulfilled", () => {
    const mockData = [
      {
        person: [
          {
            firstname: "",
            lastname: "",
            patronymic: "",
            age: "",
            city: "",
          },
        ],
        contacts: [
          {
            photo: "./photo.jpg",
            tel: "tel:",
            mail: "mailto:",
            telegram: "http://t.me/",
            github: "https://",
            linkedin: "https://",
          },
        ],
        position: [
          {
            position: "",
            employment: "",
            schedule: "",
            about: "",
          },
        ],
        hobby: ["Книги"],
        languages: ["Русский - родной"],
        hardskils: ["Javascript"],

        experience: [
          {
            id: 1,
            year: "",
            organization: "",
            position: "",
            description: "",
          },
        ],
        education: [
          {
            year: "",
            institution: "",
            department: "",
            specialization: "",
          },
        ],
      },
    ];
    const state = fetchReducer(initialState, fetchCV.fulfilled(mockData));

    expect(state).toEqual({
      CVjson: mockData,
      loading: false,
      error: null,
    });
  });

  it("FetchCV.rejected", () => {
    const state = fetchReducer(initialState, fetchCV.rejected("Server Error!"));
    expect(state).toEqual({
      CVjson: [],
      loading: false,
      error: "Server Error!",
    });
  });
});
