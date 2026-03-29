import { describe, expect, it } from "vitest";
import { cases33 } from "./cases.js";
import { search } from "./solution.js";

describe("33 search in rotated sorted array", () => {
  for (const c of cases33) {
    it(`nums=${JSON.stringify(c.nums)} target=${c.target}`, () => {
      expect(search(c.nums, c.target)).toBe(c.expected);
    });
  }
});
