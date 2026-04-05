import { describe, expect, it } from "vitest";
import { cases200 } from "./cases.js";
import { numIslands } from "./solution.js";

describe("200 number of islands", () => {
  for (const c of cases200) {
    it(`grid ${c.grid.length}x${c.grid[0]!.length} -> ${c.expected}`, () => {
      const grid = JSON.parse(JSON.stringify(c.grid)) as string[][];
      expect(numIslands(grid)).toBe(c.expected);
    });
  }
});
