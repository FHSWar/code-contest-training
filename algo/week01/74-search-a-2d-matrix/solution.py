# 74. 搜索二维矩阵
# https://leetcode.cn/problems/search-a-2d-matrix/


class Solution:
    def searchMatrix(self, matrix: list[list[int]], target: int) -> bool:
        m, n = len(matrix), len(matrix[0])
        left, right = 0, m * n - 1
        while left <= right:
            mid = left + (right - left) // 2
            v = matrix[mid // n][mid % n]
            if v == target:
                return True
            if v < target:
                left = mid + 1
            else:
                right = mid - 1
        return False
