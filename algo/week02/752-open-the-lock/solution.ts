/**
 * 752. 打开转盘锁
 * https://leetcode.cn/problems/open-the-lock/
 *
 * BFS 遍历 4 位状态空间，HashSet 判重 + 避开 deadends。
 */

export function openLock(deadends: string[], target: string): number {
  const dead = new Set(deadends);
  if (dead.has("0000")) return -1;
  if (target === "0000") return 0;

  const queue: string[] = ["0000"];
  const visited = new Set<string>(["0000"]);
  let steps = 0;

  while (queue.length > 0) {
    const size = queue.length;
    steps++;
    for (let i = 0; i < size; i++) {
      const state = queue.shift()!;
      for (let w = 0; w < 4; w++) {
        for (const d of [-1, 1]) {
          const digits = state.split("");
          digits[w] = String((Number(digits[w]) + d + 10) % 10);
          const next = digits.join("");
          if (next === target) return steps;
          if (!dead.has(next) && !visited.has(next)) {
            visited.add(next);
            queue.push(next);
          }
        }
      }
    }
  }

  return -1;
}
