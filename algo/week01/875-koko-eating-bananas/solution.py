# 875. 爱吃香蕉的珂珂
# https://leetcode.cn/problems/koko-eating-bananas/
import math


class Solution:
    def minEatingSpeed(self, piles: list[int], h: int) -> int:
        lo, hi = 1, max(piles)
        while lo < hi:
            mid = lo + (hi - lo) // 2
            hrs = sum(math.ceil(p / mid) for p in piles)
            if hrs <= h:
                hi = mid
            else:
                lo = mid + 1
        return lo
