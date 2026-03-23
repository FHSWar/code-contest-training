//! 704. 二分查找 — 闭区间 `[left, right]`，`while left <= right`
//! https://leetcode.cn/problems/binary-search/

struct Solution;

impl Solution {
    pub fn search(nums: Vec<i32>, target: i32) -> i32 {
        let mut left: i32 = 0;
        let mut right: i32 = nums.len() as i32 - 1;

        while left <= right {
            let mid = left + (right - left) / 2;
            let x = nums[mid as usize];

            if x == target {
                return mid;
            }
            if x < target {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        -1
    }
}

fn main() {
    assert_eq!(
        Solution::search(vec![-1, 0, 3, 5, 9, 12], 9),
        4
    );
    assert_eq!(
        Solution::search(vec![-1, 0, 3, 5, 9, 12], 2),
        -1
    );
}
