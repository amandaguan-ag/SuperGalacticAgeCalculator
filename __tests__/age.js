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
      const yearsSince25thBirthday = myAge.getYearsSinceBirthday(25);
      expect(yearsSince25thBirthday).toEqual({
        earthYears: 5,
        mercuryYears: '20.83',
        venusYears: '8.06',
        marsYears: '2.66',
        jupiterYears: '0.42'
      });
    });
  });

  describe("getYearsUntilBirthday", () => {
    it("should return the correct number of years on each planet until a future birthday", () => {
      const yearsUntil35thBirthday = myAge.getYearsUntilBirthday(35);
      expect(yearsUntil35thBirthday).toEqual({
        earthYears: 5,
        mercuryYears: '20.83',
        venusYears: '8.06',
        marsYears: '2.66',
        jupiterYears: '0.42'
      });
    });
  });
});
