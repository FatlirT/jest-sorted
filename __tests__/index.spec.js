const { toBeSorted } = require("../src/sorted");

describe("toBeSorted", () => {
  describe("expect.toBeSorted", () => {
    it("extends jest.expect", () => {
      expect(typeof expect.toBeSorted).toBe("function");
    });
  });

  describe("flat arrays", () => {
    it("pass: empty arrays are considered sorted", () => {
      expect(toBeSorted([]).pass).toBe(true);
    });
    it("pass: array of ascending numbers", () => {
      expect(toBeSorted([1, 2, 3]).pass).toBe(true);
    });
    it("fail: array of ascending numbers", () => {
      expect(toBeSorted([3, 2, 1]).pass).toBe(false);
    });
    it("pass: array of equal numbers are considered sorted", () => {
      expect(toBeSorted([2, 2, 2]).pass).toBe(true);
    });
    it("fail: array of ascending numbers to a point", () => {
      expect(toBeSorted([1, 2, 1]).pass).toBe(false);
    });
    it("pass: array of ascending numbers message provided for .not case", () => {
      expect(toBeSorted([1, 2, 3]).message()).toBe(
        "Expected [1,2,3] to not be sorted in ascending order"
      );
    });
    it("fail: array of ascending numbers message provided for .not case", () => {
      expect(toBeSorted([3, 2, 1]).message()).toBe(
        "Expected [3,2,1] to be sorted in ascending order"
      );
    });
  });
});
