import Age from "./../src/js/age.js";

describe("Age", () => {
  describe("constructor", () => {
    it("should correctly create an age object with corresponding properties", () => {
      const myage = new Age(30, "Earth");
      expect(myage.age).toEqual(30);
      expect(myage.planet).toEqual("Earth");
    });
  });
});
