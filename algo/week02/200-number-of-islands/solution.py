# 200. 岛屿数量
# https://leetcode.cn/problems/number-of-islands/


class Solution:
    def numIslands(self, grid: list[list[str]]) -> int:
        m, n = len(grid), len(grid[0])
        dirs = ((0, 1), (0, -1), (1, 0), (-1, 0))

        def dfs(r: int, c: int) -> None:
            if r < 0 or r >= m or c < 0 or c >= n or grid[r][c] != "1":
                return
            grid[r][c] = "0"
            for dr, dc in dirs:
                dfs(r + dr, c + dc)

        count = 0
        for r in range(m):
            for c in range(n):
                if grid[r][c] == "1":
                    count += 1
                    dfs(r, c)
        return count
