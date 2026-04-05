import { describe, expect, it } from "vitest";
import { cases752 } from "./cases.js";
import { openLock } from "./solution.js";

describe("752 open the lock", () => {
  for (const c of cases752) {
    it(`target=${c.target} -> ${c.expected}`, () => {
      expect(openLock(c.deadends, c.target)).toBe(c.expected);
    });
  }
});
