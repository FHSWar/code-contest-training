/**
 * 74. 搜索二维矩阵
 * https://leetcode.cn/problems/search-a-2d-matrix/
 *
 * 视作一行递增的一维数组做二分。
 */

export function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length;
  const n = matrix[0]!.length;
  let left = 0;
  let right = m * n - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const v = matrix[Math.floor(mid / n)]![mid % n]!;
    if (v === target) return true;
    if (v < target) left = mid + 1;
    else right = mid - 1;
  }
  return false;
}
