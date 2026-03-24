# 35. 搜索插入位置（Search Insert Position）

- **链接**：[LeetCode 35](https://leetcode.cn/problems/search-insert-position/)
- **难度**：简单
- **标签**：数组、二分查找

## 题目描述

给定一个**排序**的整数数组 `nums` 和一个目标值 `target`，请你在数组中找到 `target`，并返回其下标；若目标值不存在于数组中，返回它将会被按顺序插入的位置。

你必须实现时间复杂度为 **O(log n)** 的算法。

## 示例

```
输入：nums = [1,3,5,6], target = 5
输出：2
```

```
输入：nums = [1,3,5,6], target = 2
输出：1
```

```
输入：nums = [1,3,5,6], target = 7
输出：4
```

## 约束

- `1 <= nums.length <= 10^4`
- `-10^4 <= nums[i] <= 10^4`
- `nums` 为**无重复元素**的**升序**排列
- `-10^4 <= target <= 10^4`

## 解题思路

见 [`思路.md`](./思路.md)（与 704 左闭右开模板的关系、`lower_bound` 语义）。

## 本地代码

解答见同目录 [`solution.ts`](./solution.ts)，另有 [`solution.py`](./solution.py)、[`solution.rs`](./solution.rs)。公共用例在 [`cases.ts`](./cases.ts)，Python 为 [`test_solution.py`](./test_solution.py)。

在仓库 `algo/` 下：`npm run test` 跑三语言单元测试；`npm run check` 仅做 TS 类型检查；`npm run check:all` 含类型检查、`cargo check` 与全套测试（需安装 Node、Python 3、Rust 工具链）。
