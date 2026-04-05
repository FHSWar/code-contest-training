# 733. 图像渲染
# https://leetcode.cn/problems/flood-fill/


class Solution:
    def floodFill(
        self, image: list[list[int]], sr: int, sc: int, color: int
    ) -> list[list[int]]:
        orig = image[sr][sc]
        if orig == color:
            return image

        m, n = len(image), len(image[0])
        dirs = ((0, 1), (0, -1), (1, 0), (-1, 0))

        def dfs(r: int, c: int) -> None:
            if r < 0 or r >= m or c < 0 or c >= n or image[r][c] != orig:
                return
            image[r][c] = color
            for dr, dc in dirs:
                dfs(r + dr, c + dc)

        dfs(sr, sc)
        return image
