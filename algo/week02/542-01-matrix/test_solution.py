# 542 单元测试（与 cases.ts 用例对齐）
import unittest

from solution import Solution

CASES = [
    (
        [[0, 0, 0], [0, 1, 0], [0, 0, 0]],
        [[0, 0, 0], [0, 1, 0], [0, 0, 0]],
    ),
    (
        [[0, 0, 0], [0, 1, 0], [1, 1, 1]],
        [[0, 0, 0], [0, 1, 0], [1, 2, 1]],
    ),
    (
        [[0], [1], [1]],
        [[0], [1], [2]],
    ),
]


class Test542(unittest.TestCase):
    def test_update_matrix(self) -> None:
        s = Solution()
        for mat, expected in CASES:
            with self.subTest(mat=mat):
                self.assertEqual(s.updateMatrix(mat), expected)


if __name__ == "__main__":
    unittest.main()
