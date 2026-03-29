/**
 * 378. 有序矩阵中第 K 小的元素
 * https://leetcode.cn/problems/kth-smallest-element-in-a-sorted-matrix/
 *
 * 值域二分：数 ≤ mid 的个数。
 */

export function kthSmallest(matrix: number[][], k: number): number {
  const n = matrix.length;

  const countLeq = (x: number): number => {
    let count = 0;
    let j = n - 1;
    for (let i = 0; i < n; i++) {
      while (j >= 0 && matrix[i]![j]! > x) j--;
      count += j + 1;
    }
    return count;
  };

  let lo = matrix[0]![0]!;
  let hi = matrix[n - 1]![n - 1]!;
  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (countLeq(mid) < k) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}
