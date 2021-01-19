import { hello } from "../src/index";

describe("index", () => {
  it("says hello", () => {
    expect(hello).toBe("hello");
  });
});
