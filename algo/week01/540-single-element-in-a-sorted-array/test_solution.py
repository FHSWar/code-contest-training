# 540 单元测试（与 cases.ts 用例对齐）
import unittest

from solution import Solution


CASES = [
    ([1, 1, 2, 3, 3, 4, 4, 8, 8], 2),
    ([3, 3, 7, 7, 10, 11, 11], 10),
    ([1], 1),
    ([1, 2, 2, 3, 3], 1),
    ([1, 1, 2, 2, 3], 3),
]


class Test540(unittest.TestCase):
    def test_single(self) -> None:
        s = Solution()
        for nums, expected in CASES:
            with self.subTest(nums=nums):
                self.assertEqual(s.singleNonDuplicate(nums), expected)


if __name__ == "__main__":
    unittest.main()
