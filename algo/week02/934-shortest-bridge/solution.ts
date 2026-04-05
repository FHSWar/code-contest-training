/**
 * 934. 最短的桥
 * https://leetcode.cn/problems/shortest-bridge/
 *
 * DFS 标记第一座岛（值改为 2），同时收集边界；
 * BFS 从边界向外扩展，碰到第二座岛（值为 1）时返回步数。
 */

export function shortestBridge(grid: number[][]): number {
  const n = grid.length;
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const queue: [number, number][] = [];

  function dfs(r: number, c: number) {
    if (r < 0 || r >= n || c < 0 || c >= n || grid[r]![c] !== 1) return;
    grid[r]![c] = 2;
    queue.push([r, c]);
    for (const [dr, dc] of dirs) dfs(r + dr!, c + dc!);
  }

  let found = false;
  for (let i = 0; i < n && !found; i++) {
    for (let j = 0; j < n && !found; j++) {
      if (grid[i]![j] === 1) {
        dfs(i, j);
        found = true;
      }
    }
  }

  let steps = 0;
  let head = 0;
  while (head < queue.length) {
    const size = queue.length - head;
    for (let s = 0; s < size; s++) {
      const [r, c] = queue[head++]!;
      for (const [dr, dc] of dirs) {
        const nr = r + dr!;
        const nc = c + dc!;
        if (nr >= 0 && nr < n && nc >= 0 && nc < n) {
          if (grid[nr]![nc] === 1) return steps;
          if (grid[nr]![nc] === 0) {
            grid[nr]![nc] = 2;
            queue.push([nr, nc]);
          }
        }
      }
    }
    steps++;
  }

  return steps;
}
