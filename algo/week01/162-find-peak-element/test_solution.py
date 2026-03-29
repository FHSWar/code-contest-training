# 162 单元测试
import unittest

from solution import Solution


def is_peak(nums: list[int], i: int) -> bool:
    ok_l = i == 0 or nums[i] > nums[i - 1]
    ok_r = i == len(nums) - 1 or nums[i] > nums[i + 1]
    return ok_l and ok_r


CASES_STRICT = [
    ([1, 2, 3, 1], 2),
    ([1], 0),
]


class Test162(unittest.TestCase):
    def test_strict(self) -> None:
        s = Solution()
        for nums, exp in CASES_STRICT:
            with self.subTest(nums=nums):
                self.assertEqual(s.findPeakElement(nums), exp)

    def test_any_peak(self) -> None:
        s = Solution()
        nums = [1, 2, 1, 3, 5, 6, 4]
        i = s.findPeakElement(nums)
        self.assertTrue(is_peak(nums, i))


if __name__ == "__main__":
    unittest.main()
