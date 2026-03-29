/**
 * 34. 在排序数组中查找元素的第一个和最后一个位置
 * https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/
 *
 * 两次 lower_bound：>= target 与 >= target+1。
 */

export function searchRange(nums: number[], target: number): number[] {
  const n = nums.length;

  function lowerBound(x: number): number {
    let left = 0;
    let right = n;
    while (left < right) {
      const mid = left + Math.floor((right - left) / 2);
      if (nums[mid]! < x) left = mid + 1;
      else right = mid;
    }
    return left;
  }

  const first = lowerBound(target);
  if (first === n || nums[first] !== target) return [-1, -1];
  const last = lowerBound(target + 1) - 1;
  return [first, last];
}
