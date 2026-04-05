# 1283. 使结果不超过阈值的最小除数

- **链接**：[LeetCode 1283](https://leetcode.cn/problems/smallest-divisor-given-a-threshold/)
- **难度**：中等
- **标签**：数组、二分查找

## 题目描述

给定一个整数数组 `nums` 和一个正整数 `threshold`。选择一个正整数作为**除数**，将数组中每个数除以它，再对每个结果**向上取整**，然后求和。

返回使得求和结果 ≤ `threshold` 的**最小除数**。

## 示例

```text
输入：nums = [1,2,5,9], threshold = 6
输出：5
解释：除数=5 时，ceil(1/5)+ceil(2/5)+ceil(5/5)+ceil(9/5) = 1+1+1+2 = 5 ≤ 6
```

```text
输入：nums = [44,22,33,11,1], threshold = 5
输出：44
解释：5 个数、阈值 5，每个数最多贡献 1，除数必须 ≥ 最大值
```

## 约束

- `1 <= nums.length <= 5 * 10^4`
- `1 <= nums[i] <= 10^6`
- `nums.length <= threshold <= 10^6`

## 本地代码

见 [`solution.ts`](./solution.ts)；解题思路见 [`思路.md`](./思路.md)。
