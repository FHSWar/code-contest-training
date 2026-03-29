//! 875. 爱吃香蕉的珂珂
//! https://leetcode.cn/problems/koko-eating-bananas/

struct Solution;

impl Solution {
    pub fn min_eating_speed(piles: Vec<i32>, h: i32) -> i32 {
        let mut lo: i32 = 1;
        let mut hi: i32 = *piles.iter().max().unwrap();
        while lo < hi {
            let mid = lo + (hi - lo) / 2;
            let mut hrs: i64 = 0;
            for &p in &piles {
                hrs += (p as i64 + mid as i64 - 1) / mid as i64;
            }
            if hrs <= h as i64 {
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
    fn koko_cases() {
        assert_eq!(
            Solution::min_eating_speed(vec![3, 6, 7, 11], 8),
            4
        );
        assert_eq!(
            Solution::min_eating_speed(vec![30, 11, 23, 4, 20], 5),
            30
        );
        assert_eq!(
            Solution::min_eating_speed(vec![30, 11, 23, 4, 20], 6),
            23
        );
    }
}

fn main() {}
