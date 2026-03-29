# 33 单元测试（与 cases.ts 用例对齐）
import unittest

from solution import Solution


CASES = [
    ([4, 5, 6, 7, 0, 1, 2], 0, 4),
    ([4, 5, 6, 7, 0, 1, 2], 3, -1),
    ([1], 0, -1),
    ([1], 1, 0),
]


class Test33(unittest.TestCase):
    def test_search(self) -> None:
        s = Solution()
        for nums, target, expected in CASES:
            with self.subTest(nums=nums, target=target):
                self.assertEqual(s.search(nums, target), expected)


if __name__ == "__main__":
    unittest.main()
