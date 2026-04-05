/**
 * 994. 腐烂的橘子
 * https://leetcode.cn/problems/rotting-oranges/
 *
 * 多源 BFS：所有腐烂橘子同时入队，逐层扩散。
 */

export function orangesRotting(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0]!.length;
  const queue: [number, number][] = [];
  let fresh = 0;

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r]![c] === 2) queue.push([r, c]);
      else if (grid[r]![c] === 1) fresh++;
    }
  }

  if (fresh === 0) return 0;

  const dirs = [1, 0, -1, 0, 0, 1, 0, -1];
  let minutes = 0;

  while (queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const [r, c] = queue.shift()!;
      for (let d = 0; d < 8; d += 2) {
        const nr = r + dirs[d]!;
        const nc = c + dirs[d + 1]!;
        if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr]![nc] === 1) {
          grid[nr]![nc] = 2;
          fresh--;
          queue.push([nr, nc]);
        }
      }
    }
    minutes++;
  }

  return fresh === 0 ? minutes - 1 : -1;
}
