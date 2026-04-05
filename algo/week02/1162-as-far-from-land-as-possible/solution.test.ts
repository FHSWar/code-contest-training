import { describe, expect, it } from "vitest";
import { cases1162 } from "./cases.js";
import { maxDistance } from "./solution.js";

describe("1162 as far from land as possible", () => {
  for (const c of cases1162) {
    it(`grid=${JSON.stringify(c.grid)} -> ${c.expected}`, () => {
      const grid = c.grid.map((row) => [...row]);
      expect(maxDistance(grid)).toBe(c.expected);
    });
  }
});
