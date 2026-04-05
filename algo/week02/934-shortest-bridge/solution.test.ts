import { describe, expect, it } from "vitest";
import { cases934 } from "./cases.js";
import { shortestBridge } from "./solution.js";

describe("934 shortest bridge", () => {
  for (const c of cases934) {
    it(`grid ${c.grid.length}x${c.grid.length} -> ${c.expected}`, () => {
      const grid = c.grid.map((row) => [...row]);
      expect(shortestBridge(grid)).toBe(c.expected);
    });
  }
});
