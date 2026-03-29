# 378 单元测试（与 cases.ts 用例对齐）
import unittest

from solution import Solution


M = [[1, 5, 9], [10, 11, 13], [12, 13, 15]]
CASES = [
    (M, 8, 13),
    ([[-5]], 1, -5),
]


class Test378(unittest.TestCase):
    def test_kth(self) -> None:
        s = Solution()
        for matrix, k, expected in CASES:
            with self.subTest(k=k):
                self.assertEqual(s.kthSmallest(matrix, k), expected)


if __name__ == "__main__":
    unittest.main()
