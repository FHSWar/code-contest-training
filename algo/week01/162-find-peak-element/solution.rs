//! 162. 寻找峰值
//! https://leetcode.cn/problems/find-peak-element/

struct Solution;

impl Solution {
    pub fn find_peak_element(nums: Vec<i32>) -> i32 {
        let mut left: i32 = 0;
        let mut right: i32 = nums.len() as i32 - 1;
        while left < right {
            let mid = left + (right - left) / 2;
            if nums[mid as usize] < nums[(mid + 1) as usize] {
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

    fn is_peak(nums: &[i32], i: i32) -> bool {
        let i = i as usize;
        let ok_l = i == 0 || nums[i] > nums[i - 1];
        let ok_r = i + 1 == nums.len() || nums[i] > nums[i + 1];
        ok_l && ok_r
    }

    #[test]
    fn find_peak_cases() {
        assert_eq!(Solution::find_peak_element(vec![1, 2, 3, 1]), 2);
        assert_eq!(Solution::find_peak_element(vec![1]), 0);
        let nums = vec![1, 2, 1, 3, 5, 6, 4];
        let i = Solution::find_peak_element(nums.clone());
        assert!(is_peak(&nums, i));
    }
}

fn main() {}
