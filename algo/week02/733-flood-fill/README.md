# 733. 图像渲染（Flood Fill）

- **链接**：[LeetCode 733](https://leetcode.cn/problems/flood-fill/)
- **难度**：简单
- **标签**：深度优先搜索、广度优先搜索、数组、矩阵

## 题目描述

有一幅以 `m x n` 的二维整数数组表示的图画 `image`，其中 `image[i][j]` 表示该处的像素值。

给定三个整数 `sr`、`sc` 和 `color`。从起始像素 `(sr, sc)` 开始进行图像渲染：将与起始像素**颜色相同**且通过上下左右**相邻**连通的所有像素，全部改为 `color`。

返回修改后的图画。

## 示例

```text
输入：image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
输出：[[2,2,2],[2,2,0],[2,0,1]]
解释：从 (1,1) 开始，颜色 1 的相邻像素全部变为 2。右下角的 1 不与 (1,1) 连通，不变。
```

```text
输入：image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
输出：[[0,0,0],[0,0,0]]
解释：起始像素颜色与目标颜色相同，不做任何修改。
```

## 约束

- `m == image.length`
- `n == image[i].length`
- `1 <= m, n <= 50`
- `0 <= image[i][j], color < 2^16`
- `0 <= sr < m`
- `0 <= sc < n`

## 解题思路

见 [`思路.md`](./思路.md)。

## 本地代码

解答见同目录 [`solution.ts`](./solution.ts)，另有 [`solution.py`](./solution.py)、[`solution.rs`](./solution.rs)。公共用例在 [`cases.ts`](./cases.ts)，Python 为 [`test_solution.py`](./test_solution.py)。
