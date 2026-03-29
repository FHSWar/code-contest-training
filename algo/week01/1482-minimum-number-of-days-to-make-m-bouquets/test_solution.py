# 1482 单元测试（与 cases.ts 用例对齐）
import unittest

from solution import Solution


CASES = [
    ([1, 10, 3, 10, 2], 3, 1, 3),
    ([1, 10, 3, 10, 2], 3, 2, -1),
    ([7, 7, 7, 7, 12, 7, 7], 2, 3, 12),
]


class Test1482(unittest.TestCase):
    def test_min_days(self) -> None:
        s = Solution()
        for bd, m, k, expected in CASES:
            with self.subTest(m=m, k=k):
                self.assertEqual(s.minDays(bd, m, k), expected)


if __name__ == "__main__":
    unittest.main()
