import { describe, expect, it } from "vitest";
import { cases1091 } from "./cases.js";
import { shortestPathBinaryMatrix } from "./solution.js";

describe("1091 shortest path in binary matrix", () => {
  for (const c of cases1091) {
    it(`grid=${JSON.stringify(c.grid)} -> ${c.expected}`, () => {
      const grid = c.grid.map(row => [...row]);
      expect(shortestPathBinaryMatrix(grid)).toBe(c.expected);
    });
  }
});
