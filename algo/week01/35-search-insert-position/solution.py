# 35. 搜索插入位置 — 左闭右开 [left, right)，lower_bound
# https://leetcode.cn/problems/search-insert-position/


class Solution:
    def searchInsert(self, nums: list[int], target: int) -> int:
        left, right = 0, len(nums)
        while left < right:
            mid = left + (right - left) // 2
            x = nums[mid]
            if x < target:
                left = mid + 1
            else:
                right = mid
        return left
