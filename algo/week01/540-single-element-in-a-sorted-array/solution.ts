/**
 * 540. 有序数组中的单一元素
 * https://leetcode.cn/problems/single-element-in-a-sorted-array/
 *
 * mid 强制偶数位，比较 nums[mid] 与 nums[mid+1] 判断配对是否完整。
 */

export function singleNonDuplicate(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    mid -= mid % 2;
    if (nums[mid] === nums[mid + 1]) left = mid + 2;
    else right = mid;
  }
  return nums[left]!;
}
