import { describe, expect, it } from "vitest";
import { cases1011 } from "./cases.js";
import { shipWithinDays } from "./solution.js";

describe("1011 ship within days", () => {
  for (const c of cases1011) {
    it(`days=${c.days}`, () => {
      expect(shipWithinDays(c.weights, c.days)).toBe(c.expected);
    });
  }
});
