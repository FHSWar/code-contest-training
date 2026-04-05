# 417 单元测试（与 cases.ts 用例对齐）
import unittest

from solution import Solution

CASES = [
    (
        [[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]],
        [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]],
    ),
    ([[1]], [[0, 0]]),
]


class Test417(unittest.TestCase):
    def test_pacific_atlantic(self) -> None:
        s = Solution()
        for heights, expected in CASES:
            with self.subTest(heights=heights):
                result = sorted(s.pacificAtlantic(heights))
                self.assertEqual(result, sorted(expected))


if __name__ == "__main__":
    unittest.main()
