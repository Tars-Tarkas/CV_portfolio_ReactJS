import { fetchCV } from "../CVSlice";

describe("CVRThunk", () => {
  it("resolved", async () => {
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

    (global.fetch as any) = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    const dispatch = jest.fn();
    const thunk = fetchCV();
    await thunk(dispatch);

    const { calls } = dispatch.mock;
    expect(calls).toHaveLength(2);
    const [start, end] = calls;
    expect(start[0].type).toBe(fetchCV.pending().type);
    expect(end[0].type).toBe(fetchCV.fulfilled().type);
    expect(end[0].payload).toBe(mockData);
  });

  it("rejected", async () => {
    (global.fetch as any) = jest.fn().mockResolvedValue({
      ok: false,
    });

    const dispatch = jest.fn();
    const thunk = fetchCV();
    await thunk(dispatch);

    const { calls } = dispatch.mock;
    expect(calls).toHaveLength(2);
    const [start, end] = calls;

    expect(start[0].type).toBe(fetchCV.pending().type);
    expect(end[0].type).toBe(fetchCV.rejected().type);
    expect(end[0].meta.rejectedWithValue).toBe(true);
    expect(end[0].payload).toBe("Server Error!");
  });
});
