import { describe, expect, it } from "vitest";
import { cases130 } from "./cases.js";
import { solve } from "./solution.js";

describe("130 surrounded regions", () => {
  for (const c of cases130) {
    it(`board=${JSON.stringify(c.board)} -> ${JSON.stringify(c.expected)}`, () => {
      const board = c.board.map((row) => [...row]);
      solve(board);
      expect(board).toEqual(c.expected);
    });
  }
});
