//! 540. 有序数组中的单一元素
//! https://leetcode.cn/problems/single-element-in-a-sorted-array/

struct Solution;

impl Solution {
    pub fn single_non_duplicate(nums: Vec<i32>) -> i32 {
        let mut left: i32 = 0;
        let mut right: i32 = nums.len() as i32 - 1;
        while left < right {
            let mut mid = left + (right - left) / 2;
            mid -= mid & 1;
            let m = mid as usize;
            if nums[m] == nums[m + 1] {
                left = mid + 2;
            } else {
                right = mid;
            }
        }
        nums[left as usize]
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;

    #[test]
    fn single_cases() {
        assert_eq!(
            Solution::single_non_duplicate(vec![1, 1, 2, 3, 3, 4, 4, 8, 8]),
            2
        );
        assert_eq!(
            Solution::single_non_duplicate(vec![3, 3, 7, 7, 10, 11, 11]),
            10
        );
        assert_eq!(Solution::single_non_duplicate(vec![1]), 1);
        assert_eq!(
            Solution::single_non_duplicate(vec![1, 2, 2, 3, 3]),
            1
        );
        assert_eq!(
            Solution::single_non_duplicate(vec![1, 1, 2, 2, 3]),
            3
        );
    }
}

fn main() {}
