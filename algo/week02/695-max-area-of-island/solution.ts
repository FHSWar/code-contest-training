/**
 * 695. 岛屿的最大面积
 * https://leetcode.cn/problems/max-area-of-island/
 *
 * DFS 沉岛，返回面积。
 */

const DIRS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

export function maxAreaOfIsland(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0]!.length;
  let maxArea = 0;

  function dfs(r: number, c: number): number {
    if (r < 0 || r >= m || c < 0 || c >= n || grid[r]![c] !== 1) return 0;
    grid[r]![c] = 0;
    let area = 1;
    for (const [dr, dc] of DIRS) {
      area += dfs(r + dr!, c + dc!);
    }
    return area;
  }

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r]![c] === 1) {
        maxArea = Math.max(maxArea, dfs(r, c));
      }
    }
  }

  return maxArea;
}
