# 1162. 地图分析
# https://leetcode.cn/problems/as-far-from-land-as-possible/

from collections import deque


class Solution:
    def maxDistance(self, grid: list[list[int]]) -> int:
        n = len(grid)
        q: deque[tuple[int, int]] = deque()
        for i in range(n):
            for j in range(n):
                if grid[i][j] == 1:
                    q.append((i, j))
        if not q or len(q) == n * n:
            return -1
        dist = -1
        while q:
            for _ in range(len(q)):
                r, c = q.popleft()
                for dr, dc in ((0, 1), (0, -1), (1, 0), (-1, 0)):
                    nr, nc = r + dr, c + dc
                    if 0 <= nr < n and 0 <= nc < n and grid[nr][nc] == 0:
                        grid[nr][nc] = 1
                        q.append((nr, nc))
            dist += 1
        return dist
