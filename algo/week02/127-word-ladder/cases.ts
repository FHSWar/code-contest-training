/** 127 公共用例：beginWord、endWord、wordList、期望转换序列长度（0 表示无法转换） */
export const cases127: { beginWord: string; endWord: string; wordList: string[]; expected: number }[] = [
  { beginWord: "hit", endWord: "cog", wordList: ["hot", "dot", "dog", "lot", "log", "cog"], expected: 5 },
  { beginWord: "hit", endWord: "cog", wordList: ["hot", "dot", "dog", "lot", "log"], expected: 0 },
  { beginWord: "a", endWord: "c", wordList: ["a", "b", "c"], expected: 2 },
];
