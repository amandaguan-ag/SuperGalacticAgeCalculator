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
  
  describe("getMercuryAge()", () => {
    it("should calculate the age correctly in Mercury years", () => {
      expect(myAge.getMercuryAge()).toEqual(125);
    });
  });
});
