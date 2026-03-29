# 153 单元测试（与 cases.ts 用例对齐）
import unittest

from solution import Solution


CASES = [
    ([3, 4, 5, 1, 2], 1),
    ([4, 5, 6, 7, 0, 1, 2], 0),
    ([11, 13, 15, 17], 11),
    ([1], 1),
    ([2, 1], 1),
]


class Test153(unittest.TestCase):
    def test_find_min(self) -> None:
        s = Solution()
        for nums, expected in CASES:
            with self.subTest(nums=nums):
                self.assertEqual(s.findMin(nums), expected)


if __name__ == "__main__":
    unittest.main()
