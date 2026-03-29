import { describe, expect, it } from "vitest";
import { cases74 } from "./cases.js";
import { searchMatrix } from "./solution.js";

describe("74 search 2d matrix", () => {
  for (const c of cases74) {
    it(`target=${c.target}`, () => {
      expect(searchMatrix(c.matrix, c.target)).toBe(c.expected);
    });
  }
});
