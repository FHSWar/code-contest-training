# 752. 打开转盘锁
# https://leetcode.cn/problems/open-the-lock/

from collections import deque


class Solution:
    def openLock(self, deadends: list[str], target: str) -> int:
        dead = set(deadends)
        if "0000" in dead:
            return -1
        if target == "0000":
            return 0

        queue = deque(["0000"])
        visited = {"0000"}
        steps = 0

        while queue:
            steps += 1
            for _ in range(len(queue)):
                state = queue.popleft()
                for w in range(4):
                    for d in (-1, 1):
                        digits = list(state)
                        digits[w] = str((int(digits[w]) + d) % 10)
                        nxt = "".join(digits)
                        if nxt == target:
                            return steps
                        if nxt not in dead and nxt not in visited:
                            visited.add(nxt)
                            queue.append(nxt)

        return -1
