import { describe, expect, it } from "vitest";
import { cases542 } from "./cases.js";
import { updateMatrix } from "./solution.js";

describe("542 01 matrix", () => {
  for (const c of cases542) {
    it(`mat=${JSON.stringify(c.mat)} -> ${JSON.stringify(c.expected)}`, () => {
      expect(updateMatrix(c.mat)).toEqual(c.expected);
    });
  }
});
