/** 994 公共用例：grid 为输入网格，expected 为最少分钟数（-1 表示不可能） */
export const cases994: { grid: number[][]; expected: number }[] = [
  { grid: [[2, 1, 1], [1, 1, 0], [0, 1, 1]], expected: 4 },
  { grid: [[2, 1, 1], [0, 1, 1], [1, 0, 1]], expected: -1 },
  { grid: [[0, 2]], expected: 0 },
  { grid: [[0]], expected: 0 },
  { grid: [[1]], expected: -1 },
  { grid: [[2, 1, 1], [1, 1, 1], [0, 1, 2]], expected: 2 },
];
