# 127. 单词接龙
# https://leetcode.cn/problems/word-ladder/

from collections import deque


class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: list[str]) -> int:
        word_set = set(wordList)
        if endWord not in word_set:
            return 0

        queue = deque([beginWord])
        visited = {beginWord}
        steps = 1

        while queue:
            for _ in range(len(queue)):
                word = queue.popleft()
                for j in range(len(word)):
                    for c in range(26):
                        ch = chr(ord("a") + c)
                        nxt = word[:j] + ch + word[j + 1 :]
                        if nxt == endWord:
                            return steps + 1
                        if nxt in word_set and nxt not in visited:
                            visited.add(nxt)
                            queue.append(nxt)
            steps += 1

        return 0
