import { describe, expect, it } from "vitest";
import { cases417 } from "./cases.js";
import { pacificAtlantic } from "./solution.js";

const sort2d = (a: number[][]) =>
  a.map((r) => [...r]).sort((x, y) => x[0]! - y[0]! || x[1]! - y[1]!);

describe("417 pacific atlantic water flow", () => {
  for (const c of cases417) {
    it(`heights ${c.heights.length}x${c.heights[0]!.length} -> ${c.expected.length} cells`, () => {
      expect(sort2d(pacificAtlantic(c.heights))).toEqual(sort2d(c.expected));
    });
  }
});
