import { describe, expect, it } from "vitest";
import { cases875 } from "./cases.js";
import { minEatingSpeed } from "./solution.js";

describe("875 koko eating bananas", () => {
  for (const c of cases875) {
    it(`piles h=${c.h}`, () => {
      expect(minEatingSpeed(c.piles, c.h)).toBe(c.expected);
    });
  }
});
