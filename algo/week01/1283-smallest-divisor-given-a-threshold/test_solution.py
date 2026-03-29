# 1283 单元测试（与 cases.ts 用例对齐）
import unittest

from solution import Solution


CASES = [
    ([1, 2, 5, 9], 6, 5),
    ([44, 22, 33, 11, 1], 5, 44),
]


class Test1283(unittest.TestCase):
    def test_smallest_divisor(self) -> None:
        s = Solution()
        for nums, th, expected in CASES:
            with self.subTest(threshold=th):
                self.assertEqual(s.smallestDivisor(nums, th), expected)


if __name__ == "__main__":
    unittest.main()
