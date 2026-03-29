//! 378. 有序矩阵中第 K 小的元素
//! https://leetcode.cn/problems/kth-smallest-element-in-a-sorted-matrix/

struct Solution;

impl Solution {
    pub fn kth_smallest(matrix: Vec<Vec<i32>>, k: i32) -> i32 {
        let n = matrix.len();
        let k = k as usize;

        let count_leq = |x: i32| -> usize {
            let mut c = 0usize;
            let mut j: i32 = n as i32 - 1;
            for i in 0..n {
                while j >= 0 && matrix[i][j as usize] > x {
                    j -= 1;
                }
                c += (j + 1) as usize;
            }
            c
        };

        let mut lo = matrix[0][0];
        let mut hi = matrix[n - 1][n - 1];
        while lo < hi {
            let mid = lo + (hi - lo) / 2;
            if count_leq(mid) < k {
                lo = mid + 1;
            } else {
                hi = mid;
            }
        }
        lo
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;

    #[test]
    fn kth_cases() {
        let m = vec![
            vec![1, 5, 9],
            vec![10, 11, 13],
            vec![12, 13, 15],
        ];
        assert_eq!(Solution::kth_smallest(m, 8), 13);
        assert_eq!(Solution::kth_smallest(vec![vec![-5]], 1), -5);
    }
}

fn main() {}
