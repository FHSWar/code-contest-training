/**
 * 200. 岛屿数量
 * https://leetcode.cn/problems/number-of-islands/
 *
 * DFS 沉岛：遇到 '1' 就 count++，并用 DFS 将整座岛标记为 '0'。
 */

const DIRS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

export function numIslands(grid: string[][]): number {
  const m = grid.length;
  const n = grid[0]!.length;
  let count = 0;

  function dfs(r: number, c: number): void {
    if (r < 0 || r >= m || c < 0 || c >= n || grid[r]![c] !== "1") return;
    grid[r]![c] = "0";
    for (const [dr, dc] of DIRS) {
      dfs(r + dr!, c + dc!);
    }
  }

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r]![c] === "1") {
        count++;
        dfs(r, c);
      }
    }
  }

  return count;
}
