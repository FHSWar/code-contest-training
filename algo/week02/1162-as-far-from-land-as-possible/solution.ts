/**
 * 1162. 地图分析
 * https://leetcode.cn/problems/as-far-from-land-as-possible/
 *
 * 多源 BFS：所有陆地同时入队，逐层扩展到海洋，最后一层距离即答案。
 */

export function maxDistance(grid: number[][]): number {
  const n = grid.length;
  const queue: [number, number][] = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i]![j] === 1) queue.push([i, j]);
    }
  }

  if (queue.length === 0 || queue.length === n * n) return -1;

  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  let dist = -1;
  let head = 0;

  while (head < queue.length) {
    const size = queue.length - head;
    for (let s = 0; s < size; s++) {
      const [r, c] = queue[head++]!;
      for (const [dr, dc] of dirs) {
        const nr = r + dr!;
        const nc = c + dc!;
        if (nr >= 0 && nr < n && nc >= 0 && nc < n && grid[nr]![nc] === 0) {
          grid[nr]![nc] = 1;
          queue.push([nr, nc]);
        }
      }
    }
    dist++;
  }

  return dist;
}
