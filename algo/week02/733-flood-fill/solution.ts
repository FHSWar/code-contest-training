/**
 * 733. 图像渲染
 * https://leetcode.cn/problems/flood-fill/
 *
 * DFS Flood Fill。origColor == color 时直接返回，避免无限递归。
 */

const DIRS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

export function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number,
): number[][] {
  const origColor = image[sr]![sc]!;
  if (origColor === color) return image;

  const m = image.length;
  const n = image[0]!.length;

  function dfs(r: number, c: number): void {
    if (r < 0 || r >= m || c < 0 || c >= n || image[r]![c] !== origColor)
      return;
    image[r]![c] = color;
    for (const [dr, dc] of DIRS) {
      dfs(r + dr!, c + dc!);
    }
  }

  dfs(sr, sc);
  return image;
}
