/** 1482 公共用例：bloomDay、m 束、k 朵/束、期望最少天数 */
export const cases1482: {
  bloomDay: number[];
  m: number;
  k: number;
  expected: number;
}[] = [
  { bloomDay: [1, 10, 3, 10, 2], m: 3, k: 1, expected: 3 },
  { bloomDay: [1, 10, 3, 10, 2], m: 3, k: 2, expected: -1 },
  { bloomDay: [7, 7, 7, 7, 12, 7, 7], m: 2, k: 3, expected: 12 },
];
