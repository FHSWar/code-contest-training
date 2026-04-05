# 542. 01 矩阵（01 Matrix）

- **链接**：[LeetCode 542](https://leetcode.cn/problems/01-matrix/)
- **难度**：中等
- **标签**：广度优先搜索、数组、动态规划、矩阵

## 题目描述

给定一个由 `0` 和 `1` 组成的 `m x n` 矩阵 `mat`，返回一个**同样大小**的矩阵 `dist`，其中 `dist[i][j]` 是 `mat[i][j]` 到最近的 `0` 的距离。

两个相邻单元格间的距离为 `1`（上下左右四方向）。

## 示例

```text
输入：mat = [[0,0,0],[0,1,0],[0,0,0]]
输出：[[0,0,0],[0,1,0],[0,0,0]]
```

```text
输入：mat = [[0,0,0],[0,1,0],[1,1,1]]
输出：[[0,0,0],[0,1,0],[1,2,1]]
```

## 约束

- `m == mat.length`
- `n == mat[i].length`
- `1 <= m, n <= 10^4`
- `1 <= m * n <= 10^4`
- `mat[i][j]` 仅为 `0` 或 `1`
- `mat` 中至少有一个 `0`

## 解题思路

见 [`思路.md`](./思路.md)（多源 BFS、DP 双向扫描、复杂度与易错点）。

## 本地代码

解答见同目录 [`solution.ts`](./solution.ts)，另有 [`solution.py`](./solution.py)、[`solution.rs`](./solution.rs)。公共用例在 [`cases.ts`](./cases.ts)（TS 测试与文档用），Python 为 [`test_solution.py`](./test_solution.py)。

在仓库 `algo/` 下：`npm run test` 跑三语言单元测试；`npm run check` 仅做 TS 类型检查；`npm run check:all` 含类型检查、`cargo check` 与全套测试（需安装 Node、Python 3、Rust 工具链）。
