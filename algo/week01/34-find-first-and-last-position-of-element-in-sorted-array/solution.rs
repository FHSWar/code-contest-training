//! 34. 在排序数组中查找元素的第一个和最后一个位置
//! https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/

struct Solution;

impl Solution {
    pub fn search_range(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let n = nums.len();

        let lower_bound = |x: i32| -> usize {
            let mut left: i32 = 0;
            let mut right: i32 = n as i32;
            while left < right {
                let mid = left + (right - left) / 2;
                if nums[mid as usize] < x {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
            left as usize
        };

        let first = lower_bound(target);
        if first == n || nums[first] != target {
            return vec![-1, -1];
        }
        let last = lower_bound(target + 1) - 1;
        vec![first as i32, last as i32]
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;

    #[test]
    fn search_range_cases() {
        let cases: Vec<(Vec<i32>, i32, Vec<i32>)> = vec![
            (vec![5, 7, 7, 8, 8, 10], 8, vec![3, 4]),
            (vec![5, 7, 7, 8, 8, 10], 6, vec![-1, -1]),
            (vec![], 0, vec![-1, -1]),
            (vec![1], 1, vec![0, 0]),
        ];
        for (nums, target, expected) in cases {
            assert_eq!(Solution::search_range(nums, target), expected);
        }
    }
}

fn main() {}
