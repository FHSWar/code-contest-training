/**
 * 153. 寻找旋转排序数组中的最小值
 * https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/
 *
 * 无重复：与右端比较决定最小值在左半还是右半。
 */

export function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid]! > nums[right]!) left = mid + 1;
    else right = mid;
  }
  return nums[left]!;
}
