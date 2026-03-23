# 704. 二分查找 — 左闭右开 [left, right)，while left < right
# https://leetcode.cn/problems/binary-search/


class Solution:
    def search(self, nums: list[int], target: int) -> int:
        left, right = 0, len(nums)
        while left < right:
            mid = left + (right - left) // 2
            x = nums[mid]
            if x == target:
                return mid
            if x < target:
                left = mid + 1
            else:
                right = mid
        return -1
