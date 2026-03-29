import { describe, expect, it } from "vitest";
import { cases1482 } from "./cases.js";
import { minDays } from "./solution.js";

describe("1482 min days bouquets", () => {
  for (const c of cases1482) {
    it(`m=${c.m} k=${c.k}`, () => {
      expect(minDays(c.bloomDay, c.m, c.k)).toBe(c.expected);
    });
  }
});
