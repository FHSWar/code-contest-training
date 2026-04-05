# 417. 太平洋大西洋水流问题（Pacific Atlantic Water Flow）

- **链接**：[LeetCode 417](https://leetcode.cn/problems/pacific-atlantic-water-flow/)
- **难度**：中等
- **标签**：深度优先搜索、广度优先搜索、数组、矩阵

## 题目描述

有一个 `m x n` 的矩形岛屿，与太平洋和大西洋相邻。**太平洋**处于大陆的左边界和上边界，**大西洋**处于大陆的右边界和下边界。

岛上有很多格子，每个格子有一个高度 `heights[r][c]`。雨水可以从任意格子流向 4 个方向（上下左右）相邻的格子，前提是相邻格子的高度**小于等于**当前格子的高度。雨水也可以从边界流入海洋。

找出所有雨水既能流到太平洋，又能流到大西洋的格子的坐标。

## 示例

```text
输入：heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
输出：[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
```

```text
输入：heights = [[1]]
输出：[[0,0]]
```

## 约束

- `m == heights.length`
- `n == heights[r].length`
- `1 <= m, n <= 200`
- `0 <= heights[r][c] <= 10^5`

## 解题思路

见 [`思路.md`](./思路.md)（反向 DFS、复杂度与易错点）。

## 本地代码

解答见同目录 [`solution.ts`](./solution.ts)，另有 [`solution.py`](./solution.py)、[`solution.rs`](./solution.rs)。公共用例在 [`cases.ts`](./cases.ts)（TS 测试与文档用），Python 为 [`test_solution.py`](./test_solution.py)。

在仓库 `algo/` 下：`npm run test` 跑三语言单元测试；`npm run check` 仅做 TS 类型检查；`npm run check:all` 含类型检查、`cargo check` 与全套测试（需安装 Node、Python 3、Rust 工具链）。
