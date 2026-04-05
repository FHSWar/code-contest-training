# 200 单元测试（与 cases.ts 用例对齐）
import unittest

from solution import Solution

CASES = [
    (
        [
            ["1", "1", "1", "1", "0"],
            ["1", "1", "0", "1", "0"],
            ["1", "1", "0", "0", "0"],
            ["0", "0", "0", "0", "0"],
        ],
        1,
    ),
    (
        [
            ["1", "1", "0", "0", "0"],
            ["1", "1", "0", "0", "0"],
            ["0", "0", "1", "0", "0"],
            ["0", "0", "0", "1", "1"],
        ],
        3,
    ),
    ([["1"]], 1),
    ([["0"]], 0),
]


class Test200(unittest.TestCase):
    def test_num_islands(self) -> None:
        s = Solution()
        for grid, expected in CASES:
            with self.subTest(grid=grid):
                grid_copy = [row[:] for row in grid]
                self.assertEqual(s.numIslands(grid_copy), expected)


if __name__ == "__main__":
    unittest.main()
