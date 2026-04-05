import { describe, expect, it } from "vitest";
import { cases127 } from "./cases.js";
import { ladderLength } from "./solution.js";

describe("127 word ladder", () => {
  for (const c of cases127) {
    it(`${c.beginWord} -> ${c.endWord} -> ${c.expected}`, () => {
      expect(ladderLength(c.beginWord, c.endWord, c.wordList)).toBe(c.expected);
    });
  }
});
