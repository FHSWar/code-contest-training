//! 74. 搜索二维矩阵
//! https://leetcode.cn/problems/search-a-2d-matrix/

struct Solution;

impl Solution {
    pub fn search_matrix(matrix: Vec<Vec<i32>>, target: i32) -> bool {
        let m = matrix.len();
        let n = matrix[0].len();
        let mut left: i32 = 0;
        let mut right: i32 = (m * n) as i32 - 1;
        while left <= right {
            let mid = left + (right - left) / 2;
            let v = matrix[(mid as usize) / n][(mid as usize) % n];
            if v == target {
                return true;
            }
            if v < target {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        false
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;

    #[test]
    fn search_matrix_cases() {
        let m = vec![
            vec![1, 3, 5, 7],
            vec![10, 11, 16, 20],
            vec![23, 30, 34, 60],
        ];
        assert!(Solution::search_matrix(m.clone(), 3));
        assert!(!Solution::search_matrix(m, 13));
        assert!(Solution::search_matrix(vec![vec![1]], 1));
        assert!(!Solution::search_matrix(vec![vec![1]], 2));
    }
}

fn main() {}
