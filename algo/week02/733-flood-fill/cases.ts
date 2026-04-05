/** 733 公共用例：image + 起始坐标 + 新颜色 -> 渲染后图像 */
export const cases733: {
  image: number[][];
  sr: number;
  sc: number;
  color: number;
  expected: number[][];
}[] = [
  {
    image: [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    sr: 1,
    sc: 1,
    color: 2,
    expected: [
      [2, 2, 2],
      [2, 2, 0],
      [2, 0, 1],
    ],
  },
  {
    image: [
      [0, 0, 0],
      [0, 0, 0],
    ],
    sr: 0,
    sc: 0,
    color: 0,
    expected: [
      [0, 0, 0],
      [0, 0, 0],
    ],
  },
  {
    image: [
      [0, 0, 0],
      [0, 1, 1],
    ],
    sr: 1,
    sc: 1,
    color: 1,
    expected: [
      [0, 0, 0],
      [0, 1, 1],
    ],
  },
];
