import { describe, expect, it } from "vitest";
import { cases34 } from "./cases.js";
import { searchRange } from "./solution.js";

describe("34 find first and last position", () => {
  for (const c of cases34) {
    it(`nums=${JSON.stringify(c.nums)} target=${c.target}`, () => {
      expect(searchRange(c.nums, c.target)).toEqual(c.expected);
    });
  }
});
