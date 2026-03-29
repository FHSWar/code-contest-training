//! 153. 寻找旋转排序数组中的最小值
//! https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/

struct Solution;

impl Solution {
    pub fn find_min(nums: Vec<i32>) -> i32 {
        let mut left: i32 = 0;
        let mut right: i32 = nums.len() as i32 - 1;
        while left < right {
            let mid = left + (right - left) / 2;
            if nums[mid as usize] > nums[right as usize] {
                left = mid + 1;
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
    fn find_min_cases() {
        assert_eq!(Solution::find_min(vec![3, 4, 5, 1, 2]), 1);
        assert_eq!(Solution::find_min(vec![4, 5, 6, 7, 0, 1, 2]), 0);
        assert_eq!(Solution::find_min(vec![11, 13, 15, 17]), 11);
        assert_eq!(Solution::find_min(vec![1]), 1);
        assert_eq!(Solution::find_min(vec![2, 1]), 1);
    }
}

fn main() {}
