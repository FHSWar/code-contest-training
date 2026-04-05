# 1091 单元测试（与 cases.ts 用例对齐）
import unittest

from solution import Solution

CASES = [
    ([[0, 1], [1, 0]], 2),
    ([[0, 0, 0], [1, 1, 0], [1, 1, 0]], 4),
    ([[1, 0, 0], [1, 1, 0], [1, 1, 0]], -1),
    ([[0]], 1),
]


class Test1091(unittest.TestCase):
    def test_shortest_path(self) -> None:
        s = Solution()
        for grid, expected in CASES:
            with self.subTest(grid=grid):
                clone = [row[:] for row in grid]
                self.assertEqual(s.shortestPathBinaryMatrix(clone), expected)


if __name__ == "__main__":
    unittest.main()
