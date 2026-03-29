# 74 单元测试（与 cases.ts 用例对齐）
import unittest

from solution import Solution


M = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]
CASES = [
    (M, 3, True),
    (M, 13, False),
    ([[1]], 1, True),
    ([[1]], 2, False),
]


class Test74(unittest.TestCase):
    def test_search_matrix(self) -> None:
        s = Solution()
        for matrix, target, expected in CASES:
            with self.subTest(target=target):
                self.assertEqual(s.searchMatrix(matrix, target), expected)


if __name__ == "__main__":
    unittest.main()
