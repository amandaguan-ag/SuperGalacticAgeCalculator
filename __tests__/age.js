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

  describe("getJupiterAge()", () => {
    it("should calculate the age correctly in Jupiter years", () => {
      expect(myAge.getJupiterAge()).toEqual(2);
    });
  });

  describe("getYearsSinceBirthday", () => {
    it("should return the correct number of years on each planet since a past birthday", () => {
      const myAge = new Age(56);
      const yearsSince43rdBirthday = myAge.getYearsSinceBirthday(43);
      expect(yearsSince43rdBirthday).toEqual({
        earthYears: 13,
        mercuryYears: "54.17",
        venusYears: "20.97",
        marsYears: "6.91",
        jupiterYears: "1.10",
      });
    });
  });
});
