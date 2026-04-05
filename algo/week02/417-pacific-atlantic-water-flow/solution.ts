/**
 * 417. 太平洋大西洋水流问题
 * https://leetcode.cn/problems/pacific-atlantic-water-flow/
 *
 * 反向 DFS：从两个洋的边界出发向高处走，取两组可达集合的交集。
 */

export function pacificAtlantic(heights: number[][]): number[][] {
  const m = heights.length;
  const n = heights[0]!.length;
  const pacific = Array.from({ length: m }, () => Array<boolean>(n).fill(false));
  const atlantic = Array.from({ length: m }, () => Array<boolean>(n).fill(false));
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];

  function dfs(r: number, c: number, visited: boolean[][]) {
    visited[r]![c] = true;
    for (const [dr, dc] of dirs) {
      const nr = r + dr!;
      const nc = c + dc!;
      if (
        nr >= 0 && nr < m && nc >= 0 && nc < n &&
        !visited[nr]![nc] &&
        heights[nr]![nc]! >= heights[r]![c]!
      ) {
        dfs(nr, nc, visited);
      }
    }
  }

  for (let i = 0; i < m; i++) {
    dfs(i, 0, pacific);
    dfs(i, n - 1, atlantic);
  }
  for (let j = 0; j < n; j++) {
    dfs(0, j, pacific);
    dfs(m - 1, j, atlantic);
  }

  const result: number[][] = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacific[i]![j] && atlantic[i]![j]) result.push([i, j]);
    }
  }
  return result;
}
