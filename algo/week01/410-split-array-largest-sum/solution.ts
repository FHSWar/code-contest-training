/**
 * 410. 分割数组的最大值
 * https://leetcode.cn/problems/split-array-largest-sum/
 *
 * 二分「子数组和的上界」，贪心划分数不超过 k。
 */

export function splitArray(nums: number[], k: number): number {
  const can = (maxSum: number): boolean => {
    let parts = 1;
    let cur = 0;
    for (const x of nums) {
      if (x > maxSum) return false;
      if (cur + x > maxSum) {
        parts++;
        cur = x;
      } else {
        cur += x;
      }
      if (parts > k) return false;
    }
    return true;
  };

  let lo = Math.max(...nums);
  let hi = nums.reduce((a, b) => a + b, 0);
  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (can(mid)) hi = mid;
    else lo = mid + 1;
  }
  return lo;
}
