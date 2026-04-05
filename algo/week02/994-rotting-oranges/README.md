# 994. 腐烂的橘子（Rotting Oranges）

- **链接**：[LeetCode 994](https://leetcode.cn/problems/rotting-oranges/)
- **难度**：中等
- **标签**：广度优先搜索、数组、矩阵

## 题目描述

在给定的 `m x n` 网格 `grid` 中，每个单元格可以有以下三个值之一：

- `0` 代表空单元格
- `1` 代表新鲜橘子
- `2` 代表腐烂的橘子

每分钟，腐烂的橘子**周围 4 个方向**上相邻的新鲜橘子都会腐烂。

返回直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能使所有新鲜橘子腐烂，返回 `-1`。

## 示例

```text
输入：grid = [[2,1,1],[1,1,0],[0,1,1]]
输出：4
```

```text
输入：grid = [[2,1,1],[0,1,1],[1,0,1]]
输出：-1
解释：左下角的橘子（第 2 行第 0 列）无法被腐烂。
```

```text
输入：grid = [[0,2]]
输出：0
解释：没有新鲜橘子，返回 0。
```

## 约束

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 10`
- `grid[i][j]` 仅为 `0`、`1` 或 `2`

## 解题思路

见 [`思路.md`](./思路.md)（多源 BFS、分层扩展、复杂度与易错点）。

## 本地代码

解答见同目录 [`solution.ts`](./solution.ts)，另有 [`solution.py`](./solution.py)、[`solution.rs`](./solution.rs)。公共用例在 [`cases.ts`](./cases.ts)（TS 测试与文档用），Python 为 [`test_solution.py`](./test_solution.py)。

在仓库 `algo/` 下：`npm run test` 跑三语言单元测试；`npm run check` 仅做 TS 类型检查；`npm run check:all` 含类型检查、`cargo check` 与全套测试（需安装 Node、Python 3、Rust 工具链）。
