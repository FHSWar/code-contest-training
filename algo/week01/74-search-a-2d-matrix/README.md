# 74. 搜索二维矩阵

- **链接**：[LeetCode 74](https://leetcode.cn/problems/search-a-2d-matrix/)
- **难度**：中等
- **标签**：数组、二分查找、矩阵

## 题目描述

给定一个 `m × n` 的整数矩阵 `matrix`，该矩阵具有以下特性：

- 每行中的整数从左到右按**非递减**排列
- 每行的第一个整数**大于**前一行的最后一个整数

给定整数 `target`，判断 `target` 是否在矩阵中。

## 示例

```
输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
输出：true
```

```
输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
输出：false
```

## 约束

- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m, n <= 100`
- `-10^4 <= matrix[i][j], target <= 10^4`

## 本地代码

见 [`solution.ts`](./solution.ts)；解题思路见 [`思路.md`](./思路.md)。
