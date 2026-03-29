# 34. 在排序数组中查找元素的第一个和最后一个位置
# https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/


class Solution:
    def searchRange(self, nums: list[int], target: int) -> list[int]:
        n = len(nums)

        def lower_bound(x: int) -> int:
            left, right = 0, n
            while left < right:
                mid = left + (right - left) // 2
                if nums[mid] < x:
                    left = mid + 1
                else:
                    right = mid
            return left

        first = lower_bound(target)
        if first == n or nums[first] != target:
            return [-1, -1]
        last = lower_bound(target + 1) - 1
        return [first, last]
