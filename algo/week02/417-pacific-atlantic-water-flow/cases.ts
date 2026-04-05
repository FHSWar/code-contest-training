/** 417 公共用例：heights 高度矩阵、expected 可同时到达两洋的坐标（顺序无关） */
export const cases417: { heights: number[][]; expected: number[][] }[] = [
  {
    heights: [[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]],
    expected: [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]],
  },
  {
    heights: [[1]],
    expected: [[0, 0]],
  },
];
