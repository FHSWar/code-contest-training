/** 1162 公共用例：grid、期望最远距离（全陆/全海返回 -1） */
export const cases1162: { grid: number[][]; expected: number }[] = [
  { grid: [[1, 0, 1], [0, 0, 0], [1, 0, 1]], expected: 2 },
  { grid: [[1, 0, 0], [0, 0, 0], [0, 0, 0]], expected: 4 },
  { grid: [[1, 1, 1], [1, 1, 1], [1, 1, 1]], expected: -1 },
  { grid: [[0, 0, 0], [0, 0, 0], [0, 0, 0]], expected: -1 },
];
