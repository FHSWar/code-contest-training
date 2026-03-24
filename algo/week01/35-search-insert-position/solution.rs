//! 35. 搜索插入位置 — 左闭右开 `[left, right)`，lower_bound
//! https://leetcode.cn/problems/search-insert-position/

struct Solution;

impl Solution {
    pub fn search_insert(nums: Vec<i32>, target: i32) -> i32 {
        let mut left: i32 = 0;
        let mut right: i32 = nums.len() as i32;

        while left < right {
            let mid = left + (right - left) / 2;
            let x = nums[mid as usize];

            if x < target {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        left
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;

    #[test]
    fn search_insert_matches_shared_cases() {
        let cases: Vec<(Vec<i32>, i32, i32)> = vec![
            (vec![1, 3, 5, 6], 5, 2),
            (vec![1, 3, 5, 6], 2, 1),
            (vec![1, 3, 5, 6], 7, 4),
            (vec![1, 3, 5, 6], 0, 0),
            (vec![1], 0, 0),
            (vec![1], 2, 1),
        ];
        for (nums, target, expected) in cases {
            assert_eq!(Solution::search_insert(nums, target), expected);
        }
    }
}

fn main() {}
