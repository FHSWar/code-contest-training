# 704. 二分查找（Binary Search）

- **链接**：[LeetCode 704](https://leetcode.cn/problems/binary-search/)
- **难度**：简单
- **标签**：数组、二分查找

## 题目描述

给定一个 **升序排列** 的整数数组 `nums` 和一个目标值 `target`，请你在数组中找出 `target` 所在的下标；若不存在则返回 `-1`。

你必须实现时间复杂度为 **O(log n)** 的算法。

## 示例

```
输入：nums = [-1,0,3,5,9,12], target = 9
输出：4
解释：9 出现在 nums 中下标为 4 的位置
```

```
输入：nums = [-1,0,3,5,9,12], target = 2
输出：-1
解释：2 不存在于 nums 中
```

## 约束

- `1 <= nums.length <= 10^4`
- `-10^4 < nums[i], target < 10^4`
- `nums` 按 **严格递增** 排序（无重复时与「升序」一致；题意下用二分即可）

## 解题思路

见 [`思路.md`](./思路.md)（两种区间写法、复杂度与易错点）。

## 本地代码

解答见同目录 [`solution.ts`](./solution.ts)，另有 [`solution.py`](./solution.py)、[`solution.rs`](./solution.rs)。在仓库的 `algo/` 目录执行 `pnpm install && pnpm run check`（或 `npm run check`）做 TypeScript 检查；`npm run check:all` 可串联 Python / Rust（需本机安装相应工具链）。
