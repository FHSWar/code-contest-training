# 704 单元测试（与 cases.ts 用例对齐）
import unittest

from solution import Solution


CASES = [
    ([-1, 0, 3, 5, 9, 12], 9, 4),
    ([-1, 0, 3, 5, 9, 12], 2, -1),
    ([5], 5, 0),
    ([5], -5, -1),
    ([2, 5], 5, 1),
    ([-1, 0, 3, 5, 9, 12], -1, 0),
]


class Test704(unittest.TestCase):
    def test_search(self) -> None:
        s = Solution()
        for nums, target, expected in CASES:
            with self.subTest(nums=nums, target=target):
                self.assertEqual(s.search(nums, target), expected)


if __name__ == "__main__":
    unittest.main()
