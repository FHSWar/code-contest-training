/**
 * 162. 寻找峰值
 * https://leetcode.cn/problems/find-peak-element/
 *
 * 二分：若 nums[mid] < nums[mid+1]，峰值在右半；否则在左半（含 mid）。
 */

export function findPeakElement(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid]! < nums[mid + 1]!) left = mid + 1;
    else right = mid;
  }
  return left;
}
