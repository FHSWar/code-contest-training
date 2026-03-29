import { describe, expect, it } from "vitest";
import { cases153 } from "./cases.js";
import { findMin } from "./solution.js";

describe("153 find min in rotated sorted array", () => {
  for (const c of cases153) {
    it(`nums=${JSON.stringify(c.nums)}`, () => {
      expect(findMin(c.nums)).toBe(c.expected);
    });
  }
});
