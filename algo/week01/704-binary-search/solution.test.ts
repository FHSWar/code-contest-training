import { describe, expect, it } from "vitest";
import { cases704 } from "./cases.js";
import { search, searchHalfOpen } from "./solution.js";

describe("704 binary search", () => {
  describe("closed interval (search)", () => {
    for (const c of cases704) {
      it(`nums=${JSON.stringify(c.nums)} target=${c.target} -> ${c.expected}`, () => {
        expect(search(c.nums, c.target)).toBe(c.expected);
      });
    }
  });

  describe("half-open (searchHalfOpen)", () => {
    for (const c of cases704) {
      it(`nums=${JSON.stringify(c.nums)} target=${c.target} -> ${c.expected}`, () => {
        expect(searchHalfOpen(c.nums, c.target)).toBe(c.expected);
      });
    }
  });
});
