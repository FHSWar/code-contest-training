//! 542. 01 矩阵
//! https://leetcode.cn/problems/01-matrix/

use std::collections::VecDeque;

struct Solution;

impl Solution {
    pub fn update_matrix(mat: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let m = mat.len();
        let n = mat[0].len();
        let sentinel = (m * n) as i32;
        let mut dist = vec![vec![sentinel; n]; m];
        let mut queue: VecDeque<(usize, usize)> = VecDeque::new();

        for r in 0..m {
            for c in 0..n {
                if mat[r][c] == 0 {
                    dist[r][c] = 0;
                    queue.push_back((r, c));
                }
            }
        }

        let dirs: [(i32, i32); 4] = [(1, 0), (-1, 0), (0, 1), (0, -1)];

        while let Some((r, c)) = queue.pop_front() {
            for &(dr, dc) in &dirs {
                let nr = r as i32 + dr;
                let nc = c as i32 + dc;
                if nr >= 0 && nr < m as i32 && nc >= 0 && nc < n as i32 {
                    let (nru, ncu) = (nr as usize, nc as usize);
                    if dist[nru][ncu] > dist[r][c] + 1 {
                        dist[nru][ncu] = dist[r][c] + 1;
                        queue.push_back((nru, ncu));
                    }
                }
            }
        }

        dist
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;

    #[test]
    fn update_matrix_matches_shared_cases() {
        assert_eq!(
            Solution::update_matrix(vec![vec![0, 0, 0], vec![0, 1, 0], vec![0, 0, 0]]),
            vec![vec![0, 0, 0], vec![0, 1, 0], vec![0, 0, 0]]
        );
        assert_eq!(
            Solution::update_matrix(vec![vec![0, 0, 0], vec![0, 1, 0], vec![1, 1, 1]]),
            vec![vec![0, 0, 0], vec![0, 1, 0], vec![1, 2, 1]]
        );
        assert_eq!(
            Solution::update_matrix(vec![vec![0], vec![1], vec![1]]),
            vec![vec![0], vec![1], vec![2]]
        );
    }
}

fn main() {}
