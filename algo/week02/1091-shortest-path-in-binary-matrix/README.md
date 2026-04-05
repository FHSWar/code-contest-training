# 1091. 二进制矩阵中的最短路径（Shortest Path in Binary Matrix）

- **链接**：[LeetCode 1091](https://leetcode.cn/problems/shortest-path-in-binary-matrix/)
- **难度**：中等
- **标签**：广度优先搜索、数组、矩阵

## 题目描述

给定一个 `n x n` 的二进制矩阵 `grid`，找出从左上角 `(0, 0)` 到右下角 `(n-1, n-1)` 的最短**畅通路径**的长度。如果不存在这样的路径，返回 `-1`。

**畅通路径**是一条由值为 `0` 的单元格组成的路径，可以沿 **8 个方向**（上、下、左、右及四个对角方向）移动到相邻单元格。路径长度为路径上经过的单元格数量（包括起点和终点）。

## 示例

```text
输入：grid = [[0,1],[1,0]]
输出：2
解释：(0,0) -> (1,1)，路径经过 2 个单元格
```

```text
输入：grid = [[0,0,0],[1,1,0],[1,1,0]]
输出：4
解释：(0,0) -> (0,1) -> (1,2) -> (2,2)
```

```text
输入：grid = [[1,0,0],[1,1,0],[1,1,0]]
输出：-1
解释：起点 grid[0][0] = 1，无法出发
```

## 约束

- `n == grid.length == grid[i].length`
- `1 <= n <= 100`
- `grid[i][j]` 为 `0` 或 `1`

## 解题思路

见 [`思路.md`](./思路.md)。

## 本地代码

解答见同目录 [`solution.ts`](./solution.ts)，另有 [`solution.py`](./solution.py)、[`solution.rs`](./solution.rs)。公共用例在 [`cases.ts`](./cases.ts)（TS 测试与文档用），Python 为 [`test_solution.py`](./test_solution.py)。
