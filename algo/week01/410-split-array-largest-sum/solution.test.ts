import { describe, expect, it } from "vitest";
import { cases410 } from "./cases.js";
import { splitArray } from "./solution.js";

describe("410 split array largest sum", () => {
  for (const c of cases410) {
    it(`k=${c.k}`, () => {
      expect(splitArray(c.nums, c.k)).toBe(c.expected);
    });
  }
});
