/** 378 公共用例：matrix、k、期望第 k 小元素 */
export const cases378: {
  matrix: number[][];
  k: number;
  expected: number;
}[] = [
  {
    matrix: [
      [1, 5, 9],
      [10, 11, 13],
      [12, 13, 15],
    ],
    k: 8,
    expected: 13,
  },
  { matrix: [[-5]], k: 1, expected: -5 },
];
