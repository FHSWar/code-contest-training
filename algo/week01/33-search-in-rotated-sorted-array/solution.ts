/**
 * 33. 搜索旋转排序数组
 * https://leetcode.cn/problems/search-in-rotated-sorted-array/
 *
 * 无重复：二分比较 mid 与 target，并判断哪半边有序。
 */

export function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) return mid;
    if (nums[left]! <= nums[mid]!) {
      if (target >= nums[left]! && target < nums[mid]!) right = mid - 1;
      else left = mid + 1;
    } else {
      if (target > nums[mid]! && target <= nums[right]!) left = mid + 1;
      else right = mid - 1;
    }
  }
  return -1;
}
