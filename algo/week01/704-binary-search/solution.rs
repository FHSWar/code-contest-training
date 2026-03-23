//! 704. 二分查找 — 左闭右开 `[left, right)`，`while left < right`
//! https://leetcode.cn/problems/binary-search/

struct Solution;

impl Solution {
    pub fn search(nums: Vec<i32>, target: i32) -> i32 {
        let mut left: i32 = 0;
        let mut right: i32 = nums.len() as i32;

        while left < right {
            let mid = left + (right - left) / 2;
            let x = nums[mid as usize];

            if x == target {
                return mid;
            }
            if x < target {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        -1
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;

    #[test]
    fn search_matches_shared_cases() {
        let cases: Vec<(Vec<i32>, i32, i32)> = vec![
            (vec![-1, 0, 3, 5, 9, 12], 9, 4),
            (vec![-1, 0, 3, 5, 9, 12], 2, -1),
            (vec![5], 5, 0),
            (vec![5], -5, -1),
            (vec![2, 5], 5, 1),
            (vec![-1, 0, 3, 5, 9, 12], -1, 0),
        ];
        for (nums, target, expected) in cases {
            assert_eq!(Solution::search(nums, target), expected);
        }
    }
}

fn main() {}
