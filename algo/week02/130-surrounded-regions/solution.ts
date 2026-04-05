/**
 * 130. 被围绕的区域
 * https://leetcode.cn/problems/surrounded-regions/
 *
 * 逆向标记：从边界 'O' DFS 标记为 '#'，再遍历翻转。
 */

export function solve(board: string[][]): void {
  const m = board.length;
  const n = board[0]!.length;

  function dfs(r: number, c: number): void {
    if (r < 0 || r >= m || c < 0 || c >= n || board[r]![c] !== "O") return;
    board[r]![c] = "#";
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  for (let r = 0; r < m; r++) {
    dfs(r, 0);
    dfs(r, n - 1);
  }
  for (let c = 0; c < n; c++) {
    dfs(0, c);
    dfs(m - 1, c);
  }

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (board[r]![c] === "O") board[r]![c] = "X";
      else if (board[r]![c] === "#") board[r]![c] = "O";
    }
  }
}
