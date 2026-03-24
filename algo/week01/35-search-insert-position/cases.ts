/** 35 公共用例：nums、target、期望插入下标 */
export const cases35: { nums: number[]; target: number; expected: number }[] = [
  { nums: [1, 3, 5, 6], target: 5, expected: 2 },
  { nums: [1, 3, 5, 6], target: 2, expected: 1 },
  { nums: [1, 3, 5, 6], target: 7, expected: 4 },
  { nums: [1, 3, 5, 6], target: 0, expected: 0 },
  { nums: [1], target: 0, expected: 0 },
  { nums: [1], target: 2, expected: 1 },
];
