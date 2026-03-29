import { describe, expect, it } from "vitest";
import { cases1283 } from "./cases.js";
import { smallestDivisor } from "./solution.js";

describe("1283 smallest divisor", () => {
  for (const c of cases1283) {
    it(`threshold=${c.threshold}`, () => {
      expect(smallestDivisor(c.nums, c.threshold)).toBe(c.expected);
    });
  }
});
