/**
 * 1091. 二进制矩阵中的最短路径
 * https://leetcode.cn/problems/shortest-path-in-binary-matrix/
 *
 * 8 方向 BFS，原地标记已访问格子。
 */

export function shortestPathBinaryMatrix(grid: number[][]): number {
  const n = grid.length;
  if (grid[0][0] !== 0 || grid[n - 1][n - 1] !== 0) return -1;
  if (n === 1) return 1;

  const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
  const queue: [number, number][] = [[0, 0]];
  grid[0][0] = 1;
  let dist = 1;

  while (queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const [r, c] = queue.shift()!;
      for (const [dr, dc] of dirs) {
        const nr = r + dr;
        const nc = c + dc;
        if (nr < 0 || nr >= n || nc < 0 || nc >= n || grid[nr][nc] !== 0) continue;
        if (nr === n - 1 && nc === n - 1) return dist + 1;
        grid[nr][nc] = 1;
        queue.push([nr, nc]);
      }
    }
    dist++;
  }

  return -1;
}
