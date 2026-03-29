//! 1482. 制作 m 束花所需的最少天数
//! https://leetcode.cn/problems/minimum-number-of-days-to-make-m-bouquets/

struct Solution;

impl Solution {
    pub fn min_days(bloom_day: Vec<i32>, m: i32, k: i32) -> i32 {
        let n = bloom_day.len() as i64;
        if (m as i64) * (k as i64) > n {
            return -1;
        }
        let m = m as usize;
        let k = k as usize;

        let ok = |days: i32| -> bool {
            let mut bouquets = 0usize;
            let mut run = 0usize;
            for &d in &bloom_day {
                if d <= days {
                    run += 1;
                    if run == k {
                        bouquets += 1;
                        run = 0;
                    }
                } else {
                    run = 0;
                }
            }
            bouquets >= m
        };

        let mut lo: i32 = 1;
        let mut hi: i32 = *bloom_day.iter().max().unwrap();
        while lo < hi {
            let mid = lo + (hi - lo) / 2;
            if ok(mid) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        if ok(lo) {
            lo
        } else {
            -1
        }
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;

    #[test]
    fn bouquet_cases() {
        assert_eq!(
            Solution::min_days(vec![1, 10, 3, 10, 2], 3, 1),
            3
        );
        assert_eq!(
            Solution::min_days(vec![1, 10, 3, 10, 2], 3, 2),
            -1
        );
        assert_eq!(
            Solution::min_days(vec![7, 7, 7, 7, 12, 7, 7], 2, 3),
            12
        );
    }
}

fn main() {}
