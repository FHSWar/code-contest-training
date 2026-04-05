# 695. 岛屿的最大面积
# https://leetcode.cn/problems/max-area-of-island/


class Solution:
    def maxAreaOfIsland(self, grid: list[list[int]]) -> int:
        m, n = len(grid), len(grid[0])
        dirs = ((0, 1), (0, -1), (1, 0), (-1, 0))

        def dfs(r: int, c: int) -> int:
            if r < 0 or r >= m or c < 0 or c >= n or grid[r][c] != 1:
                return 0
            grid[r][c] = 0
            area = 1
            for dr, dc in dirs:
                area += dfs(r + dr, c + dc)
            return area

        max_area = 0
        for r in range(m):
            for c in range(n):
                if grid[r][c] == 1:
                    max_area = max(max_area, dfs(r, c))
        return max_area
