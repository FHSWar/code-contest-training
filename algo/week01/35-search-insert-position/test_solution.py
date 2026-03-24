# 35 单元测试（与 cases.ts 用例对齐）
import unittest

from solution import Solution


CASES = [
    ([1, 3, 5, 6], 5, 2),
    ([1, 3, 5, 6], 2, 1),
    ([1, 3, 5, 6], 7, 4),
    ([1, 3, 5, 6], 0, 0),
    ([1], 0, 0),
    ([1], 2, 1),
]


class Test35(unittest.TestCase):
    def test_search_insert(self) -> None:
        s = Solution()
        for nums, target, expected in CASES:
            with self.subTest(nums=nums, target=target):
                self.assertEqual(s.searchInsert(nums, target), expected)


if __name__ == "__main__":
    unittest.main()
