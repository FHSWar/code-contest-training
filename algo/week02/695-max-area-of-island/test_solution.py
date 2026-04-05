# 695 单元测试（与 cases.ts 用例对齐）
import unittest

from solution import Solution

CASES = [
    (
        [
            [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
            [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        ],
        6,
    ),
    ([[0, 0, 0, 0, 0, 0, 0, 0]], 0),
    ([[1]], 1),
    ([[1, 1], [1, 0]], 3),
]


class Test695(unittest.TestCase):
    def test_max_area(self) -> None:
        s = Solution()
        for grid, expected in CASES:
            with self.subTest(grid=grid):
                grid_copy = [row[:] for row in grid]
                self.assertEqual(s.maxAreaOfIsland(grid_copy), expected)


if __name__ == "__main__":
    unittest.main()
