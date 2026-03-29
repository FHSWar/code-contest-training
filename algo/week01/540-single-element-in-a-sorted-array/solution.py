# 540. 有序数组中的单一元素
# https://leetcode.cn/problems/single-element-in-a-sorted-array/


class Solution:
    def singleNonDuplicate(self, nums: list[int]) -> int:
        left, right = 0, len(nums) - 1
        while left < right:
            mid = left + (right - left) // 2
            mid -= mid & 1
            if nums[mid] == nums[mid + 1]:
                left = mid + 2
            else:
                right = mid
        return nums[left]
