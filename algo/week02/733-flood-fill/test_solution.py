# 733 单元测试（与 cases.ts 用例对齐）
import unittest

from solution import Solution

CASES = [
    ([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2, [[2, 2, 2], [2, 2, 0], [2, 0, 1]]),
    ([[0, 0, 0], [0, 0, 0]], 0, 0, 0, [[0, 0, 0], [0, 0, 0]]),
    ([[0, 0, 0], [0, 1, 1]], 1, 1, 1, [[0, 0, 0], [0, 1, 1]]),
]


class Test733(unittest.TestCase):
    def test_flood_fill(self) -> None:
        s = Solution()
        for image, sr, sc, color, expected in CASES:
            with self.subTest(sr=sr, sc=sc, color=color):
                img = [row[:] for row in image]
                self.assertEqual(s.floodFill(img, sr, sc, color), expected)


if __name__ == "__main__":
    unittest.main()
