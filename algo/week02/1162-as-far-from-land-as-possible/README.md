# 1162. 地图分析（As Far from Land as Possible）

- **链接**：[LeetCode 1162](https://leetcode.cn/problems/as-far-from-land-as-possible/)
- **难度**：中等
- **标签**：广度优先搜索、数组、动态规划、矩阵

## 题目描述

给定一个 `n x n` 的网格 `grid`，其中 `1` 代表陆地，`0` 代表海洋。请找到一个海洋单元格，使其到最近陆地单元格的距离最大，并返回该距离。如果网格中只有陆地或只有海洋，返回 `-1`。

距离使用曼哈顿距离：`|x1 - x2| + |y1 - y2|`。

## 示例

```text
输入：grid = [[1,0,1],[0,0,0],[1,0,1]]
输出：2
解释：海洋单元格 (1,1) 到最近陆地的距离为 2
```

```text
输入：grid = [[1,0,0],[0,0,0],[0,0,0]]
输出：4
解释：海洋单元格 (2,2) 到最近陆地 (0,0) 的距离为 4
```

## 约束

- `n == grid.length == grid[i].length`
- `1 <= n <= 100`
- `grid[i][j]` 为 `0` 或 `1`

## 解题思路

见 [`思路.md`](./思路.md)（多源 BFS、复杂度与易错点）。

## 本地代码

解答见同目录 [`solution.ts`](./solution.ts)，另有 [`solution.py`](./solution.py)、[`solution.rs`](./solution.rs)。公共用例在 [`cases.ts`](./cases.ts)（TS 测试与文档用），Python 为 [`test_solution.py`](./test_solution.py)。

在仓库 `algo/` 下：`npm run test` 跑三语言单元测试；`npm run check` 仅做 TS 类型检查；`npm run check:all` 含类型检查、`cargo check` 与全套测试（需安装 Node、Python 3、Rust 工具链）。
