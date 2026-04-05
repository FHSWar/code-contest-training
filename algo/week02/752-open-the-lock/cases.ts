/** 752 公共用例：deadends、target、期望最少旋转次数（-1 表示不可达） */
export const cases752: { deadends: string[]; target: string; expected: number }[] = [
  { deadends: ["0201", "0101", "0102", "1212", "2002"], target: "0202", expected: 6 },
  { deadends: ["8888"], target: "0009", expected: 1 },
  { deadends: ["8887", "8889", "8878", "8898", "8788", "8988", "7888", "9888"], target: "8888", expected: -1 },
  { deadends: ["0000"], target: "8888", expected: -1 },
];
