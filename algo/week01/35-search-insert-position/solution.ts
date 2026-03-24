/**
 * 35. 搜索插入位置
 * https://leetcode.cn/problems/search-insert-position/
 *
 * 左闭右开 `[left, right)`：求第一个满足 nums[i] >= target 的下标 i（lower_bound）。
 */

export function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    const x = nums[mid]!;

    if (x < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}
