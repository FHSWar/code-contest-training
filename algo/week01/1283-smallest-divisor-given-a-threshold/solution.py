# 1283. 使结果不超过阈值的最小除数
# https://leetcode.cn/problems/smallest-divisor-given-a-threshold/
import math


class Solution:
    def smallestDivisor(self, nums: list[int], threshold: int) -> int:
        lo, hi = 1, max(nums)
        while lo < hi:
            mid = lo + (hi - lo) // 2
            s = sum(math.ceil(x / mid) for x in nums)
            if s <= threshold:
                hi = mid
            else:
                lo = mid + 1
        return lo
