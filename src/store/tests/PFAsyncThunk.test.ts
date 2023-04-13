import { fetchPF } from "../PFSlice";

describe("PFThunk", () => {
  it("resolved", async () => {
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

    (global.fetch as any) = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    const dispatch = jest.fn();
    const thunk = fetchPF();
    await thunk(dispatch);

    const { calls } = dispatch.mock;
    expect(calls).toHaveLength(2);
    const [start, end] = calls;
    expect(start[0].type).toBe(fetchPF.pending().type);
    expect(end[0].type).toBe(fetchPF.fulfilled().type);
    expect(end[0].payload).toBe(mockData);
  });

  it("rejected", async () => {
    (global.fetch as any) = jest.fn().mockResolvedValue({
      ok: false,
    });

    const dispatch = jest.fn();
    const thunk = fetchPF();
    await thunk(dispatch);

    const { calls } = dispatch.mock;
    expect(calls).toHaveLength(2);
    const [start, end] = calls;

    expect(start[0].type).toBe(fetchPF.pending().type);
    expect(end[0].type).toBe(fetchPF.rejected().type);
    expect(end[0].meta.rejectedWithValue).toBe(true);
    expect(end[0].payload).toBe("Server Error!");
  });
});
