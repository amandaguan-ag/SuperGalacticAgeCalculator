import Galactic from "../src/js/galactic.js";

describe("Galactic ", () => {
  describe("constructor", () => {
    it("should correctly create an Galactic  object with corresponding properties", () => {
      const galactic = new Galactic(true, false, false, false, false);
      expect(galactic.earth).toBe(true);
      expect(galactic.mercury).toBe(false);
      expect(galactic.venus).toBe(false);
      expect(galactic.mars).toBe(false);
      expect(galactic.jupiter).toBe(false);
    });
  });
  describe("getAge for Mercury", () => {
    it("should test that age has a default of age on Earth", function () {
      const galactic = new Galactic(true, false, false, false, false);
      expect(galactic.getAge(21)).toEqual(21);
    });
    it("should test that age can be converted to Mercury age", function () {
      const galactic = new Galactic(false, true, false, false, false);
      expect(galactic.getAge(21)).toEqual(87);
    });
    it("should test that age can be converted to Venus age", function () {
      const galactic = new Galactic(false, false, true, false, false);
      expect(galactic.getAge(21)).toEqual(33);
    });
  });
});
