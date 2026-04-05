/**
 * 542. 01 矩阵
 * https://leetcode.cn/problems/01-matrix/
 *
 * 多源 BFS：从所有 0 格子出发，逐层扩展填充距离。
 */

export function updateMatrix(mat: number[][]): number[][] {
  const m = mat.length;
  const n = mat[0]!.length;
  const dist: number[][] = Array.from({ length: m }, () => new Array<number>(n).fill(Infinity));
  const queue: [number, number][] = [];

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (mat[r]![c] === 0) {
        dist[r]![c] = 0;
        queue.push([r, c]);
      }
    }
  }

  const dirs = [1, 0, -1, 0, 0, 1, 0, -1];

  while (queue.length > 0) {
    const [r, c] = queue.shift()!;
    for (let d = 0; d < 8; d += 2) {
      const nr = r + dirs[d]!;
      const nc = c + dirs[d + 1]!;
      if (nr >= 0 && nr < m && nc >= 0 && nc < n && dist[nr]![nc]! > dist[r]![c]! + 1) {
        dist[nr]![nc] = dist[r]![c]! + 1;
        queue.push([nr, nc]);
      }
    }
  }

  return dist;
}
