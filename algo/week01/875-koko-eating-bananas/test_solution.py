# 875 单元测试（与 cases.ts 用例对齐）
import unittest

from solution import Solution


CASES = [
    ([3, 6, 7, 11], 8, 4),
    ([30, 11, 23, 4, 20], 5, 30),
    ([30, 11, 23, 4, 20], 6, 23),
]


class Test875(unittest.TestCase):
    def test_min_speed(self) -> None:
        s = Solution()
        for piles, h, expected in CASES:
            with self.subTest(h=h):
                self.assertEqual(s.minEatingSpeed(piles, h), expected)


if __name__ == "__main__":
    unittest.main()
