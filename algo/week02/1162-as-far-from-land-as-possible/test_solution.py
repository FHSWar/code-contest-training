# 1162 单元测试（与 cases.ts 用例对齐）
import copy
import unittest

from solution import Solution

CASES = [
    ([[1, 0, 1], [0, 0, 0], [1, 0, 1]], 2),
    ([[1, 0, 0], [0, 0, 0], [0, 0, 0]], 4),
    ([[1, 1, 1], [1, 1, 1], [1, 1, 1]], -1),
    ([[0, 0, 0], [0, 0, 0], [0, 0, 0]], -1),
]


class Test1162(unittest.TestCase):
    def test_max_distance(self) -> None:
        s = Solution()
        for grid, expected in CASES:
            with self.subTest(grid=grid):
                self.assertEqual(s.maxDistance(copy.deepcopy(grid)), expected)


if __name__ == "__main__":
    unittest.main()
