# 704. 二分查找 — 闭区间 [left, right]，while left <= right
# https://leetcode.cn/problems/binary-search/


class Solution:
    def search(self, nums: list[int], target: int) -> int:
        left, right = 0, len(nums) - 1
        while left <= right:
            mid = left + (right - left) // 2
            x = nums[mid]
            if x == target:
                return mid
            if x < target:
                left = mid + 1
            else:
                right = mid - 1
        return -1


if __name__ == "__main__":
    s = Solution()
    assert s.search([-1, 0, 3, 5, 9, 12], 9) == 4
    assert s.search([-1, 0, 3, 5, 9, 12], 2) == -1
