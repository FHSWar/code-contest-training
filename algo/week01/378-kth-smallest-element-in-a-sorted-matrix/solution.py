# 378. 有序矩阵中第 K 小的元素
# https://leetcode.cn/problems/kth-smallest-element-in-a-sorted-matrix/


class Solution:
    def kthSmallest(self, matrix: list[list[int]], k: int) -> int:
        n = len(matrix)

        def count_leq(x: int) -> int:
            c = 0
            j = n - 1
            for i in range(n):
                while j >= 0 and matrix[i][j] > x:
                    j -= 1
                c += j + 1
            return c

        lo, hi = matrix[0][0], matrix[-1][-1]
        while lo < hi:
            mid = lo + (hi - lo) // 2
            if count_leq(mid) < k:
                lo = mid + 1
            else:
                hi = mid
        return lo
