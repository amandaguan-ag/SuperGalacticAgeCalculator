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

  describe("getVenusAge()", () => {
    it("should calculate the age correctly in Venus years", () => {
      expect(myAge.getVenusAge()).toEqual(48);
    });
  });

  describe("getMarsAge()", () => {
    it("should calculate the age correctly in Mars years", () => {
      expect(myAge.getMarsAge()).toEqual(15);
    });
  });
});
