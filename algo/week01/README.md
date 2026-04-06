# 第 1 周 · 二分查找（基础）

- **计划区间**：2026.03.30 - 04.05（见 [第四届备战计划.md](../../第四届备战计划.md)）
- **本周目标**：两种区间写法肌肉记忆 + 二分答案入门

## 题目与本地代码

| 天 | 题目 | 本地 |
| --- | --- | --- |
| 周一 | [LC 704](https://leetcode.cn/problems/binary-search/) | [704-binary-search](./704-binary-search/README.md) |
| 周一 | [LC 35](https://leetcode.cn/problems/search-insert-position/) | [35-search-insert-position](./35-search-insert-position/README.md) |
| 周二 | [LC 34](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/) | [34-find-first-and-last-position-of-element-in-sorted-array](./34-find-first-and-last-position-of-element-in-sorted-array/README.md) |
| 周二 | [LC 162](https://leetcode.cn/problems/find-peak-element/) | [162-find-peak-element](./162-find-peak-element/README.md) |
| 周三 | [LC 33](https://leetcode.cn/problems/search-in-rotated-sorted-array/) | [33-search-in-rotated-sorted-array](./33-search-in-rotated-sorted-array/README.md) |
| 周三 | [LC 153](https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/) | [153-find-minimum-in-rotated-sorted-array](./153-find-minimum-in-rotated-sorted-array/README.md) |
| 周四 | [LC 74](https://leetcode.cn/problems/search-a-2d-matrix/) | [74-search-a-2d-matrix](./74-search-a-2d-matrix/README.md) |
| 周四 | [LC 540](https://leetcode.cn/problems/single-element-in-a-sorted-array/) | [540-single-element-in-a-sorted-array](./540-single-element-in-a-sorted-array/README.md) |
| 周五 | [LC 875](https://leetcode.cn/problems/koko-eating-bananas/) ⭐ | [875-koko-eating-bananas](./875-koko-eating-bananas/README.md) |
| 周六 | [LC 1283](https://leetcode.cn/problems/smallest-divisor-given-a-threshold/) | [1283-smallest-divisor-given-a-threshold](./1283-smallest-divisor-given-a-threshold/README.md) |
| 周六 | [LC 1482](https://leetcode.cn/problems/minimum-number-of-days-to-make-m-bouquets/) | [1482-minimum-number-of-days-to-make-m-bouquets](./1482-minimum-number-of-days-to-make-m-bouquets/README.md) |
| 周六 | [LC 378](https://leetcode.cn/problems/kth-smallest-element-in-a-sorted-matrix/) | [378-kth-smallest-element-in-a-sorted-matrix](./378-kth-smallest-element-in-a-sorted-matrix/README.md) |
| 周日 | [LC 1011](https://leetcode.cn/problems/capacity-to-ship-packages-within-d-days/) ⭐ | [1011-capacity-to-ship-packages-within-d-days](./1011-capacity-to-ship-packages-within-d-days/README.md) |
| 周日 | [LC 410](https://leetcode.cn/problems/split-array-largest-sum/) | [410-split-array-largest-sum](./410-split-array-largest-sum/README.md) |

上表「本地」列指向各题目录下的 `README.md`（题面摘要）；解题笔记见同目录 `思路.md`。`solution.ts` / `solution.py` / `solution.rs`、`cases.ts`、`solution.test.ts`、`test_solution.py` 与 704/35 同构；正式提交仍在 LeetCode。

## 核心认知

二分的本质不是"在有序数组里找一个数"，而是**让搜索区间收敛到只剩一个元素**。

1. **排除而非确认**：每一步不判断"mid 是不是答案"，而是判断"哪一半一定没有答案"，扔掉那一半。升序 / 单调性就是那个让你敢扔的依据。
2. **延迟决策**：即使 `nums[mid]` 已经等于 target，也不急着返回——左边可能还有更优的。让区间继续缩，直到只剩一个，那个就是答案。多做的那一两轮迭代是 O(1) 的代价，换来的是模板的通用性和正确性。
3. **`left < right` 的语义**：不是"还没找到"，而是"还没收敛到一个点"。收敛了就停。
所有二分题的区别只在于：**排除依据是什么**。704 是 `nums[mid] < target`，875 是 `check(k) 不满足`，153 是 `nums[mid] > nums[right]`——骨架一模一样。
4. **`<=` vs `<` 的选择**：不看"找的是什么"，看 **mid 命中时敢不敢直接 return**。
   - **`left <= right` + 提前返回**：mid 处能一锤定音——"就是它，收工"（704 找到 target、33 找到 target、74 找到 target）。
   - **`left < right` + 收敛到底**：mid 处只能判断"答案在左半还是右半"，无法确认 mid 就是答案。即使找的是具体值也一样——540 在 mid 处只知道单一元素在哪边，不能确定 mid 就是它；34 找到 target 了但左边可能还有更靠左的。（34、35、153、162、540、875、1283、1482、378、1011、410）
   - 后者占绝大多数，所以 `left < right` 是更通用的模板。
5. **`right = n` 还是 `right = n - 1`**：答案的可能范围决定初值。
   - 答案一定在数组内（540 单一元素、153 最小值、162 峰值）→ `right = n - 1`（闭区间，right 是候选）。
   - 答案可能是"末尾之后"（34 lower_bound：所有元素都 < target 时返回 n）→ `right = n`（开区间，right 不是候选）。
6. **强制偶数**：`mid -= mid % 2`，奇数减 1、偶数不变，一行消除奇偶分支（如 540）。等价位运算 `mid -= mid & 1` 或 `mid &= ~1` 了解即可，编译结果相同。

## 本周自检

- [ ] 闭卷默写 `while (left <= right)` 与 `while (left < right)` 两版模板
- [ ] 二分答案：`check(mid)` 单调性 + 边界收缩能说清楚
- [ ] 周日晚复盘：完成 \_\_\_/15，模板能否默写 \_\_\_

## 命名说明（本仓约定）

- **周目录**：只用 `week01`、`week02`… **不把算法名写进路径**，主题写在本文件标题即可，避免路径一长串。
- **题目录**：推荐 **`{题号}-{slug}`**（与 LeetCode URL 一致，如 `704-binary-search/`、`35-search-insert-position/`），文件树里一眼能认题；若你更在意路径短，只用题号 `704/` 也可以。

```text
week01/
  README.md
  704-binary-search/
    README.md
    solution.ts
  35-search-insert-position/
    ...
```

在 `algo/` 下：`pnpm install && pnpm run check`（或 `npm run check`）做全周 TypeScript 类型检查；`npm run test` 跑 Vitest、Python unittest、`cargo test`。
