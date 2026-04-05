import { describe, expect, it } from "vitest";
import { cases695 } from "./cases.js";
import { maxAreaOfIsland } from "./solution.js";

describe("695 max area of island", () => {
  for (const c of cases695) {
    it(`grid ${c.grid.length}x${c.grid[0]!.length} -> ${c.expected}`, () => {
      const grid = JSON.parse(JSON.stringify(c.grid)) as number[][];
      expect(maxAreaOfIsland(grid)).toBe(c.expected);
    });
  }
});
