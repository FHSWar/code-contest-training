/** 934 公共用例：grid 二元矩阵（恰好两座岛）、expected 最少翻转 0 的数目 */
export const cases934: { grid: number[][]; expected: number }[] = [
  { grid: [[0, 1], [1, 0]], expected: 1 },
  { grid: [[0, 1, 0], [0, 0, 0], [0, 0, 1]], expected: 2 },
  { grid: [[1, 1, 1, 1, 1], [1, 0, 0, 0, 1], [1, 0, 1, 0, 1], [1, 0, 0, 0, 1], [1, 1, 1, 1, 1]], expected: 1 },
];
