import { reducer } from "./reducer";

describe("application reducer", () => {
  test("it initializes itself", () => {
    const state = reducer(undefined, { type: "@@INIT" });

    expect(state.messages.length).toBe(0);
    expect(state.messages).toEqual([]);
  });

  test("accepts a new message", () => {
    const state = reducer(undefined, {
      type: "Message/Added",
      payload: {
        author: "Birgit",
        message: "Hallo Richard!",
        date: 1,
        id: "adsnodiosjadijasojoi",
      },
    });

    expect(state.messages.length).toBe(1);
    expect(state.messages[0].author).toBe("Birgit");
    expect(state.messages[0]).toEqual({
      author: "Birgit",
      message: "Hallo Richard!",
      date: 1,
      id: "adsnodiosjadijasojoi",
    });

    expect(state).toMatchInlineSnapshot(`
      Object {
        "messages": Array [
          Object {
            "author": "Birgit",
            "date": 1,
            "id": "adsnodiosjadijasojoi",
            "message": "Hallo Richard!",
          },
        ],
      }
    `);
  });
});
