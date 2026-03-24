# 第 1 周 · 二分查找（基础）

- **计划区间**：2026.03.23 - 03.29（见 [第四届备战计划.md](../../第四届备战计划.md)）
- **本周目标**：两种区间写法肌肉记忆 + 二分答案入门

## 题目与本地代码

| 天 | 题目 | 本地 |
|----|------|------|
| 周一 | [LC 704](https://leetcode.cn/problems/binary-search/) | [704-binary-search](./704-binary-search/) |
| 周一 | [LC 35](https://leetcode.cn/problems/search-insert-position/) | [35-search-insert-position](./35-search-insert-position/) |
| 周二 | [LC 34](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/) | — |
| 周二 | [LC 162](https://leetcode.cn/problems/find-peak-element/) | — |
| 周三 | [LC 33](https://leetcode.cn/problems/search-in-rotated-sorted-array/) | — |
| 周三 | [LC 153](https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/) | — |
| 周四 | [LC 74](https://leetcode.cn/problems/search-a-2d-matrix/) | — |
| 周四 | [LC 540](https://leetcode.cn/problems/single-element-in-a-sorted-array/) | — |
| 周五 | [LC 875](https://leetcode.cn/problems/koko-eating-bananas/) ⭐ | — |
| 周六 | [LC 1283](https://leetcode.cn/problems/smallest-divisor-given-a-threshold/) | — |
| 周六 | [LC 1482](https://leetcode.cn/problems/minimum-number-of-days-to-make-m-bouquets/) | — |
| 周六 | [LC 378](https://leetcode.cn/problems/kth-smallest-element-in-a-sorted-matrix/) | — |
| 周日 | [LC 1011](https://leetcode.cn/problems/capacity-to-ship-packages-within-d-days/) ⭐ | — |
| 周日 | [LC 410](https://leetcode.cn/problems/split-array-largest-sum/) | — |

有本地目录的题：`README.md` 为题面摘要，`solution.ts` 为 TypeScript 解答（LeetCode 提交时按需裁剪）。

## 本周自检

- [ ] 闭卷默写 `while (left <= right)` 与 `while (left < right)` 两版模板
- [ ] 二分答案：`check(mid)` 单调性 + 边界收缩能说清楚
- [ ] 周日晚复盘：完成 \_\_\_/15，模板能否默写 \_\_\_

## 命名说明（本仓约定）

- **周目录**：只用 `week01`、`week02`… **不把算法名写进路径**，主题写在本文件标题即可，避免路径一长串。
- **题目录**：推荐 **`{题号}-{slug}`**（与 LeetCode URL 一致，如 `704-binary-search/`、`35-search-insert-position/`），文件树里一眼能认题；若你更在意路径短，只用题号 `704/` 也可以。

```
week01/
  README.md
  704-binary-search/
    README.md
    solution.ts
  35-search-insert-position/
    ...
```

在 `algo/` 下：`pnpm install && pnpm run check`（或 `npm run check`）做全周 TypeScript 类型检查。
