# 752. 打开转盘锁（Open the Lock）

- **链接**：[LeetCode 752](https://leetcode.cn/problems/open-the-lock/)
- **难度**：中等
- **标签**：广度优先搜索、数组、哈希表、字符串

## 题目描述

一个 4 位转盘锁，每个拨轮有 `0` 到 `9` 共 10 个数字，初始状态为 `"0000"`。每次可以将一个拨轮向上或向下转动一位（`9` 之后是 `0`，`0` 之前是 `9`）。

给定一组死亡数字 `deadends`，锁一旦到达这些状态就会永久锁定，无法再转动。给定目标数字 `target`，求从 `"0000"` 到 `target` 的最少转动次数。如果无法到达目标，返回 `-1`。

## 示例

```text
输入：deadends = ["0201","0101","0102","1212","2002"], target = "0202"
输出：6
解释：一种可行序列为 "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202"
```

```text
输入：deadends = ["8888"], target = "0009"
输出：1
解释："0000" -> "0009"，只需一步
```

```text
输入：deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"
输出：-1
解释："8888" 的全部 8 个邻居都是死亡数字，无法到达
```

## 约束

- `1 <= deadends.length <= 500`
- `deadends[i].length == 4`
- `target.length == 4`
- `target` 不在 `deadends` 中
- `target` 和 `deadends[i]` 仅由数字组成

## 解题思路

见 [`思路.md`](./思路.md)。

## 本地代码

解答见同目录 [`solution.ts`](./solution.ts)，另有 [`solution.py`](./solution.py)、[`solution.rs`](./solution.rs)。公共用例在 [`cases.ts`](./cases.ts)（TS 测试与文档用），Python 为 [`test_solution.py`](./test_solution.py)。
