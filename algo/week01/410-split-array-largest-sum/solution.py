# 410. 分割数组的最大值
# https://leetcode.cn/problems/split-array-largest-sum/


class Solution:
    def splitArray(self, nums: list[int], k: int) -> int:
        def can(max_sum: int) -> bool:
            parts = 1
            cur = 0
            for x in nums:
                if x > max_sum:
                    return False
                if cur + x > max_sum:
                    parts += 1
                    cur = x
                else:
                    cur += x
                if parts > k:
                    return False
            return True

        lo, hi = max(nums), sum(nums)
        while lo < hi:
            mid = lo + (hi - lo) // 2
            if can(mid):
                hi = mid
            else:
                lo = mid + 1
        return lo
