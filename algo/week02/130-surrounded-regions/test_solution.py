# 130 单元测试（与 cases.ts 用例对齐）
import unittest

from solution import Solution

CASES = [
    (
        [
            ["X", "X", "X", "X"],
            ["X", "O", "O", "X"],
            ["X", "X", "O", "X"],
            ["X", "O", "X", "X"],
        ],
        [
            ["X", "X", "X", "X"],
            ["X", "X", "X", "X"],
            ["X", "X", "X", "X"],
            ["X", "O", "X", "X"],
        ],
    ),
    (
        [["X"]],
        [["X"]],
    ),
    (
        [
            ["O", "O", "O"],
            ["O", "O", "O"],
            ["O", "O", "O"],
        ],
        [
            ["O", "O", "O"],
            ["O", "O", "O"],
            ["O", "O", "O"],
        ],
    ),
]


class Test130(unittest.TestCase):
    def test_solve(self) -> None:
        s = Solution()
        for board, expected in CASES:
            with self.subTest(board=board):
                b = [row[:] for row in board]
                s.solve(b)
                self.assertEqual(b, expected)


if __name__ == "__main__":
    unittest.main()
