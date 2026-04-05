# 752 单元测试（与 cases.ts 用例对齐）
import unittest

from solution import Solution

CASES = [
    (["0201", "0101", "0102", "1212", "2002"], "0202", 6),
    (["8888"], "0009", 1),
    (["8887", "8889", "8878", "8898", "8788", "8988", "7888", "9888"], "8888", -1),
    (["0000"], "8888", -1),
]


class Test752(unittest.TestCase):
    def test_open_lock(self) -> None:
        s = Solution()
        for deadends, target, expected in CASES:
            with self.subTest(target=target):
                self.assertEqual(s.openLock(deadends, target), expected)


if __name__ == "__main__":
    unittest.main()
