//! 410. 分割数组的最大值
//! https://leetcode.cn/problems/split-array-largest-sum/

struct Solution;

impl Solution {
    pub fn split_array(nums: Vec<i32>, k: i32) -> i32 {
        let can = |max_sum: i32| -> bool {
            let mut parts: i32 = 1;
            let mut cur: i32 = 0;
            for &x in &nums {
                if x > max_sum {
                    return false;
                }
                if cur + x > max_sum {
                    parts += 1;
                    cur = x;
                } else {
                    cur += x;
                }
                if parts > k {
                    return false;
                }
            }
            true
        };

        let mut lo: i32 = *nums.iter().max().unwrap();
        let mut hi: i32 = nums.iter().sum();
        while lo < hi {
            let mid = lo + (hi - lo) / 2;
            if can(mid) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        lo
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;

    #[test]
    fn split_cases() {
        assert_eq!(Solution::split_array(vec![7, 2, 5, 10, 8], 2), 18);
        assert_eq!(Solution::split_array(vec![1, 2, 3, 4, 5], 2), 9);
        assert_eq!(Solution::split_array(vec![1, 4, 4], 3), 4);
    }
}

fn main() {}
