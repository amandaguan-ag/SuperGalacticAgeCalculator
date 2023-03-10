import Age from "../src/js/age.js";

describe("Age ", () => {
  let myAge;

  beforeEach(() => {
    myAge = new Age(30);
  });

  describe("constructor", () => {
    it("should correctly create an age object with corresponding properties", () => {
      expect(myAge.age).toEqual(30);
    });
  });
});