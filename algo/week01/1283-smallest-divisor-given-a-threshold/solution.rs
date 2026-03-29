//! 1283. 使结果不超过阈值的最小除数
//! https://leetcode.cn/problems/smallest-divisor-given-a-threshold/

struct Solution;

impl Solution {
    pub fn smallest_divisor(nums: Vec<i32>, threshold: i32) -> i32 {
        let mut lo: i32 = 1;
        let mut hi: i32 = *nums.iter().max().unwrap();
        while lo < hi {
            let mid = lo + (hi - lo) / 2;
            let mut s: i64 = 0;
            for &x in &nums {
                s += (x as i64 + mid as i64 - 1) / mid as i64;
            }
            if s <= threshold as i64 {
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
    fn divisor_cases() {
        assert_eq!(
            Solution::smallest_divisor(vec![1, 2, 5, 9], 6),
            5
        );
        assert_eq!(
            Solution::smallest_divisor(vec![44, 22, 33, 11, 1], 5),
            44
        );
    }
}

fn main() {}
