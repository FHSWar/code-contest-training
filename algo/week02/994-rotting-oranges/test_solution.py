# 994 单元测试（与 cases.ts 用例对齐）
import unittest

from solution import Solution

CASES = [
    ([[2, 1, 1], [1, 1, 0], [0, 1, 1]], 4),
    ([[2, 1, 1], [0, 1, 1], [1, 0, 1]], -1),
    ([[0, 2]], 0),
    ([[0]], 0),
    ([[1]], -1),
    ([[2, 1, 1], [1, 1, 1], [0, 1, 2]], 2),
]


class Test994(unittest.TestCase):
    def test_oranges_rotting(self) -> None:
        s = Solution()
        for grid, expected in CASES:
            with self.subTest(grid=grid):
                g = [row[:] for row in grid]
                self.assertEqual(s.orangesRotting(g), expected)


if __name__ == "__main__":
    unittest.main()
