//! 33. 搜索旋转排序数组
//! https://leetcode.cn/problems/search-in-rotated-sorted-array/

struct Solution;

impl Solution {
    pub fn search(nums: Vec<i32>, target: i32) -> i32 {
        let mut left: i32 = 0;
        let mut right: i32 = nums.len() as i32 - 1;
        while left <= right {
            let mid = left + (right - left) / 2;
            let m = nums[mid as usize];
            if m == target {
                return mid;
            }
            if nums[left as usize] <= m {
                if target >= nums[left as usize] && target < m {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else if target > m && target <= nums[right as usize] {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        -1
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;

    #[test]
    fn search_cases() {
        assert_eq!(
            Solution::search(vec![4, 5, 6, 7, 0, 1, 2], 0),
            4
        );
        assert_eq!(
            Solution::search(vec![4, 5, 6, 7, 0, 1, 2], 3),
            -1
        );
        assert_eq!(Solution::search(vec![1], 0), -1);
        assert_eq!(Solution::search(vec![1], 1), 0);
    }
}

fn main() {}
