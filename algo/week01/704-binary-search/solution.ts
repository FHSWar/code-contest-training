/**
 * 704. 二分查找
 * https://leetcode.cn/problems/binary-search/
 *
 * 闭区间写法：`[left, right]` 均合法，循环条件 `left <= right`。
 */

export function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const x = nums[mid]!;

    if (x === target) return mid;
    if (x < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}

/**
 * 等价：左闭右开区间 `[left, right)`，循环条件 `left < right`。
 * 与 704 题意相同，便于和「搜索插入位置」等题统一记忆。
 */
export function searchHalfOpen(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    const x = nums[mid]!;

    if (x === target) return mid;
    if (x < target) left = mid + 1;
    else right = mid;
  }

  return -1;
}
