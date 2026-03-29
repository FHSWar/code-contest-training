# 1482. 制作 m 束花所需的最少天数
# https://leetcode.cn/problems/minimum-number-of-days-to-make-m-bouquets/


class Solution:
    def minDays(self, bloomDay: list[int], m: int, k: int) -> int:
        n = len(bloomDay)
        if m * k > n:
            return -1

        def ok(days: int) -> bool:
            bouquets = run = 0
            for d in bloomDay:
                if d <= days:
                    run += 1
                    if run == k:
                        bouquets += 1
                        run = 0
                else:
                    run = 0
            return bouquets >= m

        lo, hi = 1, max(bloomDay)
        while lo < hi:
            mid = lo + (hi - lo) // 2
            if ok(mid):
                hi = mid
            else:
                lo = mid + 1
        return lo if ok(lo) else -1
