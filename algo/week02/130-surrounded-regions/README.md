# 130. 被围绕的区域（Surrounded Regions）

- **链接**：[LeetCode 130](https://leetcode.cn/problems/surrounded-regions/)
- **难度**：中等
- **标签**：深度优先搜索、广度优先搜索、并查集、数组、矩阵

## 题目描述

给你一个 `m x n` 的矩阵 `board`，由若干字符 `'X'` 和 `'O'` 组成。**原地**修改 `board`，将所有**被 `'X'` 围绕的区域**里的 `'O'` 翻转为 `'X'`。

被围绕的定义：一个 `'O'` 区域如果**不与边界上的 `'O'` 相连**（上下左右连通），则视为被围绕。换句话说，任何与边界 `'O'` 直接或间接相连的 `'O'` 都不会被翻转。

## 示例

```text
输入：board = [["X","X","X","X"],
               ["X","O","O","X"],
               ["X","X","O","X"],
               ["X","O","X","X"]]
输出：[["X","X","X","X"],
       ["X","X","X","X"],
       ["X","X","X","X"],
       ["X","O","X","X"]]
解释：左下角的 'O' 在边界上，不会被翻转。中间的 'O' 区域与边界不连通，全部翻转为 'X'。
```

```text
输入：board = [["X"]]
输出：[["X"]]
```

## 约束

- `m == board.length`
- `n == board[i].length`
- `1 <= m, n <= 200`
- `board[i][j]` 仅为 `'X'` 或 `'O'`

## 解题思路

见 [`思路.md`](./思路.md)（逆向标记、DFS/BFS、复杂度与易错点）。

## 本地代码

解答见同目录 [`solution.ts`](./solution.ts)，另有 [`solution.py`](./solution.py)、[`solution.rs`](./solution.rs)。公共用例在 [`cases.ts`](./cases.ts)（TS 测试与文档用），Python 为 [`test_solution.py`](./test_solution.py)。

在仓库 `algo/` 下：`npm run test` 跑三语言单元测试；`npm run check` 仅做 TS 类型检查；`npm run check:all` 含类型检查、`cargo check` 与全套测试（需安装 Node、Python 3、Rust 工具链）。
