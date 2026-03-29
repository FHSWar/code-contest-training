//! 1011. 在 D 天内送达包裹的能力
//! https://leetcode.cn/problems/capacity-to-ship-packages-within-d-days/

struct Solution;

impl Solution {
    pub fn ship_within_days(weights: Vec<i32>, days: i32) -> i32 {
        let can = |cap: i32| -> bool {
            let mut d: i32 = 1;
            let mut cur: i32 = 0;
            for &w in &weights {
                if w > cap {
                    return false;
                }
                if cur + w > cap {
                    d += 1;
                    cur = w;
                } else {
                    cur += w;
                }
                if d > days {
                    return false;
                }
            }
            true
        };

        let mut lo: i32 = *weights.iter().max().unwrap();
        let mut hi: i32 = weights.iter().sum();
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
    fn ship_cases() {
        assert_eq!(
            Solution::ship_within_days(vec![1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5),
            15
        );
        assert_eq!(
            Solution::ship_within_days(vec![3, 2, 2, 4, 1, 4], 3),
            6
        );
        assert_eq!(
            Solution::ship_within_days(vec![1, 2, 3, 1, 1], 4),
            3
        );
    }
}

fn main() {}
