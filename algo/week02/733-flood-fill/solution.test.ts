import { describe, expect, it } from "vitest";
import { cases733 } from "./cases.js";
import { floodFill } from "./solution.js";

describe("733 flood fill", () => {
  for (const c of cases733) {
    it(`(${c.sr},${c.sc}) color=${c.color} -> expected`, () => {
      const image = JSON.parse(JSON.stringify(c.image)) as number[][];
      expect(floodFill(image, c.sr, c.sc, c.color)).toEqual(c.expected);
    });
  }
});
