/** 74 公共用例：matrix、target、是否存在 */
export const cases74: {
  matrix: number[][];
  target: number;
  expected: boolean;
}[] = [
  {
    matrix: [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    target: 3,
    expected: true,
  },
  {
    matrix: [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    target: 13,
    expected: false,
  },
  { matrix: [[1]], target: 1, expected: true },
  { matrix: [[1]], target: 2, expected: false },
];
