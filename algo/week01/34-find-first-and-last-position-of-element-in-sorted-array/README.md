# 34. 在排序数组中查找元素的第一个和最后一个位置

- **链接**：[LeetCode 34](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/)
- **难度**：中等
- **标签**：数组、二分查找

## 题目描述

给定一个**升序排列**的整数数组 `nums` 和一个目标值 `target`，找出 `target` 在数组中的**开始位置和结束位置**。如果不存在则返回 `[-1, -1]`。

要求时间复杂度 **O(log n)**。

## 示例

```text
输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
解释：8 第一次出现在下标 3，最后一次在下标 4
```

```text
输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]
```

```text
输入：nums = [], target = 0
输出：[-1,-1]
```

## 约束

- `0 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`
- `nums` 非递减排列
- `-10^9 <= target <= 10^9`

## 本地代码

见 [`solution.ts`](./solution.ts)；解题思路见 [`思路.md`](./思路.md)。
