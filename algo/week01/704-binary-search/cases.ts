/** 704 公共用例：nums、target、期望下标（不存在为 -1） */
export const cases704: { nums: number[]; target: number; expected: number }[] = [
  { nums: [-1, 0, 3, 5, 9, 12], target: 9, expected: 4 },
  { nums: [-1, 0, 3, 5, 9, 12], target: 2, expected: -1 },
  { nums: [5], target: 5, expected: 0 },
  { nums: [5], target: -5, expected: -1 },
  { nums: [2, 5], target: 5, expected: 1 },
  { nums: [-1, 0, 3, 5, 9, 12], target: -1, expected: 0 },
];
