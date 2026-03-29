/**
 * 1283. 使结果不超过阈值的最小除数
 * https://leetcode.cn/problems/smallest-divisor-given-a-threshold/
 *
 * 二分除数 d：sum(ceil(nums[i]/d)) <= threshold。
 */

export function smallestDivisor(nums: number[], threshold: number): number {
  let lo = 1;
  let hi = Math.max(1, ...nums);
  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    let sum = 0;
    for (const x of nums) {
      sum += Math.ceil(x / mid);
    }
    if (sum <= threshold) hi = mid;
    else lo = mid + 1;
  }
  return lo;
}
