/** 130 公共用例：board 为输入矩阵，expected 为 solve 后的矩阵状态 */
export const cases130: { board: string[][]; expected: string[][] }[] = [
  {
    board: [
      ["X", "X", "X", "X"],
      ["X", "O", "O", "X"],
      ["X", "X", "O", "X"],
      ["X", "O", "X", "X"],
    ],
    expected: [
      ["X", "X", "X", "X"],
      ["X", "X", "X", "X"],
      ["X", "X", "X", "X"],
      ["X", "O", "X", "X"],
    ],
  },
  {
    board: [["X"]],
    expected: [["X"]],
  },
  {
    board: [
      ["O", "O", "O"],
      ["O", "O", "O"],
      ["O", "O", "O"],
    ],
    expected: [
      ["O", "O", "O"],
      ["O", "O", "O"],
      ["O", "O", "O"],
    ],
  },
];
