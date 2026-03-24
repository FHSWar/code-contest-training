import { describe, expect, it } from "vitest";
import { cases35 } from "./cases.js";
import { searchInsert } from "./solution.js";

describe("35 search insert position", () => {
  for (const c of cases35) {
    it(`nums=${JSON.stringify(c.nums)} target=${c.target} -> ${c.expected}`, () => {
      expect(searchInsert(c.nums, c.target)).toBe(c.expected);
    });
  }
});
