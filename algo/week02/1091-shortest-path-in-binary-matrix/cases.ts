/** 1091 公共用例：grid、期望最短路径长度（-1 表示不可达） */
export const cases1091: { grid: number[][]; expected: number }[] = [
  { grid: [[0, 1], [1, 0]], expected: 2 },
  { grid: [[0, 0, 0], [1, 1, 0], [1, 1, 0]], expected: 4 },
  { grid: [[1, 0, 0], [1, 1, 0], [1, 1, 0]], expected: -1 },
  { grid: [[0]], expected: 1 },
];
