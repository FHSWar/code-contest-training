import { describe, expect, it } from "vitest";
import { cases994 } from "./cases.js";
import { orangesRotting } from "./solution.js";

describe("994 rotting oranges", () => {
  for (const c of cases994) {
    it(`grid=${JSON.stringify(c.grid)} -> ${c.expected}`, () => {
      const grid = c.grid.map((row) => [...row]);
      expect(orangesRotting(grid)).toBe(c.expected);
    });
  }
});
