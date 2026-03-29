import { describe, expect, it } from "vitest";
import { cases378 } from "./cases.js";
import { kthSmallest } from "./solution.js";

describe("378 kth smallest in sorted matrix", () => {
  for (const c of cases378) {
    it(`k=${c.k}`, () => {
      expect(kthSmallest(c.matrix, c.k)).toBe(c.expected);
    });
  }
});
