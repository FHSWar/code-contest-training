import { describe, expect, it } from "vitest";
import { cases540 } from "./cases.js";
import { singleNonDuplicate } from "./solution.js";

describe("540 single element in sorted array", () => {
  for (const c of cases540) {
    it(`nums=${JSON.stringify(c.nums)}`, () => {
      expect(singleNonDuplicate(c.nums)).toBe(c.expected);
    });
  }
});
