# 127 单元测试（与 cases.ts 用例对齐）
import unittest

from solution import Solution

CASES = [
    ("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"], 5),
    ("hit", "cog", ["hot", "dot", "dog", "lot", "log"], 0),
    ("a", "c", ["a", "b", "c"], 2),
]


class Test127(unittest.TestCase):
    def test_ladder_length(self) -> None:
        s = Solution()
        for begin_word, end_word, word_list, expected in CASES:
            with self.subTest(begin_word=begin_word, end_word=end_word):
                self.assertEqual(s.ladderLength(begin_word, end_word, word_list), expected)


if __name__ == "__main__":
    unittest.main()
