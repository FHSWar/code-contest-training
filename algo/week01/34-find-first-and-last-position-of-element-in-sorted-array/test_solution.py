# 34 单元测试（与 cases.ts 对齐）
import unittest

from solution import Solution


CASES = [
    ([5, 7, 7, 8, 8, 10], 8, [3, 4]),
    ([5, 7, 7, 8, 8, 10], 6, [-1, -1]),
    ([], 0, [-1, -1]),
    ([1], 1, [0, 0]),
]


class Test34(unittest.TestCase):
    def test_search_range(self) -> None:
        s = Solution()
        for nums, target, expected in CASES:
            with self.subTest(nums=nums, target=target):
                self.assertEqual(s.searchRange(nums, target), expected)


if __name__ == "__main__":
    unittest.main()
