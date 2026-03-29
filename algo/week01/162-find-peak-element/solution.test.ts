import { describe, expect, it } from "vitest";
import { cases162 } from "./cases.js";
import { findPeakElement } from "./solution.js";

function isPeak(nums: number[], i: number): boolean {
  const l = i === 0 || nums[i]! > nums[i - 1]!;
  const r = i === nums.length - 1 || nums[i]! > nums[i + 1]!;
  return l && r;
}

describe("162 find peak element", () => {
  for (const c of cases162) {
    it(`nums=${JSON.stringify(c.nums)}`, () => {
      const i = findPeakElement(c.nums);
      expect(isPeak(c.nums, i)).toBe(true);
      if (c.expected !== undefined) expect(i).toBe(c.expected);
    });
  }
});
