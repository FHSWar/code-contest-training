# 934. 最短的桥
# https://leetcode.cn/problems/shortest-bridge/

from collections import deque


class Solution:
    def shortestBridge(self, grid: list[list[int]]) -> int:
        n = len(grid)
        q: deque[tuple[int, int]] = deque()

        def dfs(r: int, c: int) -> None:
            if r < 0 or r >= n or c < 0 or c >= n or grid[r][c] != 1:
                return
            grid[r][c] = 2
            q.append((r, c))
            for dr, dc in ((0, 1), (0, -1), (1, 0), (-1, 0)):
                dfs(r + dr, c + dc)

        found = False
        for i in range(n):
            if found:
                break
            for j in range(n):
                if grid[i][j] == 1:
                    dfs(i, j)
                    found = True
                    break

        steps = 0
        while q:
            for _ in range(len(q)):
                r, c = q.popleft()
                for dr, dc in ((0, 1), (0, -1), (1, 0), (-1, 0)):
                    nr, nc = r + dr, c + dc
                    if 0 <= nr < n and 0 <= nc < n:
                        if grid[nr][nc] == 1:
                            return steps
                        if grid[nr][nc] == 0:
                            grid[nr][nc] = 2
                            q.append((nr, nc))
            steps += 1

        return steps
