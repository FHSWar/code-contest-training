# 934. 最短的桥（Shortest Bridge）

- **链接**：[LeetCode 934](https://leetcode.cn/problems/shortest-bridge/)
- **难度**：中等
- **标签**：深度优先搜索、广度优先搜索、数组、矩阵

## 题目描述

给你一个大小为 `n x n` 的二元矩阵 `grid`，其中 `1` 表示陆地，`0` 表示水域。

岛是由四面相连的 `1` 形成的一个最大组。题目保证 `grid` 中**恰好有两座岛**。

你可以将任意数量的 `0` 变为 `1`，以使两座岛连接起来，变成一座岛。返回必须翻转的 `0` 的**最小数目**。

## 示例

```text
输入：grid = [[0,1],[1,0]]
输出：1
```

```text
输入：grid = [[0,1,0],[0,0,0],[0,0,1]]
输出：2
```

```text
输入：grid = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
输出：1
```

## 约束

- `n == grid.length == grid[i].length`
- `2 <= n <= 100`
- `grid[i][j]` 为 `0` 或 `1`
- `grid` 中恰好有两座岛

## 解题思路

见 [`思路.md`](./思路.md)（DFS 标记 + BFS 扩展、复杂度与易错点）。

## 本地代码

解答见同目录 [`solution.ts`](./solution.ts)，另有 [`solution.py`](./solution.py)、[`solution.rs`](./solution.rs)。公共用例在 [`cases.ts`](./cases.ts)（TS 测试与文档用），Python 为 [`test_solution.py`](./test_solution.py)。

在仓库 `algo/` 下：`npm run test` 跑三语言单元测试；`npm run check` 仅做 TS 类型检查；`npm run check:all` 含类型检查、`cargo check` 与全套测试（需安装 Node、Python 3、Rust 工具链）。
