# 417. 太平洋大西洋水流问题
# https://leetcode.cn/problems/pacific-atlantic-water-flow/


class Solution:
    def pacificAtlantic(self, heights: list[list[int]]) -> list[list[int]]:
        m, n = len(heights), len(heights[0])
        pacific: set[tuple[int, int]] = set()
        atlantic: set[tuple[int, int]] = set()

        def dfs(r: int, c: int, visited: set[tuple[int, int]]) -> None:
            visited.add((r, c))
            for dr, dc in ((0, 1), (0, -1), (1, 0), (-1, 0)):
                nr, nc = r + dr, c + dc
                if (
                    0 <= nr < m
                    and 0 <= nc < n
                    and (nr, nc) not in visited
                    and heights[nr][nc] >= heights[r][c]
                ):
                    dfs(nr, nc, visited)

        for i in range(m):
            dfs(i, 0, pacific)
            dfs(i, n - 1, atlantic)
        for j in range(n):
            dfs(0, j, pacific)
            dfs(m - 1, j, atlantic)

        return sorted([r, c] for r, c in pacific & atlantic)
