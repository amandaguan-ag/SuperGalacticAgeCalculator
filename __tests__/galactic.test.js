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
});