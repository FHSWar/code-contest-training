# 410 单元测试（与 cases.ts 用例对齐）
import unittest

from solution import Solution


CASES = [
    ([7, 2, 5, 10, 8], 2, 18),
    ([1, 2, 3, 4, 5], 2, 9),
    ([1, 4, 4], 3, 4),
]


class Test410(unittest.TestCase):
    def test_split(self) -> None:
        s = Solution()
        for nums, k, expected in CASES:
            with self.subTest(k=k):
                self.assertEqual(s.splitArray(nums, k), expected)


if __name__ == "__main__":
    unittest.main()
