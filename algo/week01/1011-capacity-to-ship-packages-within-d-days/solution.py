# 1011. 在 D 天内送达包裹的能力
# https://leetcode.cn/problems/capacity-to-ship-packages-within-d-days/


class Solution:
    def shipWithinDays(self, weights: list[int], days: int) -> int:
        def can(cap: int) -> bool:
            d = 1
            cur = 0
            for w in weights:
                if w > cap:
                    return False
                if cur + w > cap:
                    d += 1
                    cur = w
                else:
                    cur += w
                if d > days:
                    return False
            return True

        lo, hi = max(weights), sum(weights)
        while lo < hi:
            mid = lo + (hi - lo) // 2
            if can(mid):
                hi = mid
            else:
                lo = mid + 1
        return lo
