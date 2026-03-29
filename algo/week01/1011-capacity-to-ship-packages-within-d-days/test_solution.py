# 1011 单元测试（与 cases.ts 用例对齐）
import unittest

from solution import Solution


CASES = [
    ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5, 15),
    ([3, 2, 2, 4, 1, 4], 3, 6),
    ([1, 2, 3, 1, 1], 4, 3),
]


class Test1011(unittest.TestCase):
    def test_ship(self) -> None:
        s = Solution()
        for w, d, expected in CASES:
            with self.subTest(days=d):
                self.assertEqual(s.shipWithinDays(w, d), expected)


if __name__ == "__main__":
    unittest.main()
