//! 1091. 二进制矩阵中的最短路径 — 8 方向 BFS，原地标记
//! https://leetcode.cn/problems/shortest-path-in-binary-matrix/

use std::collections::VecDeque;

struct Solution;

impl Solution {
    pub fn shortest_path_binary_matrix(mut grid: Vec<Vec<i32>>) -> i32 {
        let n = grid.len();
        if grid[0][0] != 0 || grid[n - 1][n - 1] != 0 {
            return -1;
        }
        if n == 1 {
            return 1;
        }

        let dirs: [(i32, i32); 8] = [
            (-1, -1), (-1, 0), (-1, 1),
            (0, -1),           (0, 1),
            (1, -1),  (1, 0),  (1, 1),
        ];
        let mut queue = VecDeque::new();
        queue.push_back((0usize, 0usize));
        grid[0][0] = 1;
        let mut dist = 1;

        while !queue.is_empty() {
            let size = queue.len();
            for _ in 0..size {
                let (r, c) = queue.pop_front().unwrap();
                for &(dr, dc) in &dirs {
                    let nr = r as i32 + dr;
                    let nc = c as i32 + dc;
                    if nr < 0 || nr >= n as i32 || nc < 0 || nc >= n as i32 {
                        continue;
                    }
                    let (nr, nc) = (nr as usize, nc as usize);
                    if grid[nr][nc] != 0 {
                        continue;
                    }
                    if nr == n - 1 && nc == n - 1 {
                        return dist + 1;
                    }
                    grid[nr][nc] = 1;
                    queue.push_back((nr, nc));
                }
            }
            dist += 1;
        }

        -1
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;

    #[test]
    fn shortest_path_matches_shared_cases() {
        let cases: Vec<(Vec<Vec<i32>>, i32)> = vec![
            (vec![vec![0, 1], vec![1, 0]], 2),
            (vec![vec![0, 0, 0], vec![1, 1, 0], vec![1, 1, 0]], 4),
            (vec![vec![1, 0, 0], vec![1, 1, 0], vec![1, 1, 0]], -1),
            (vec![vec![0]], 1),
        ];
        for (grid, expected) in cases {
            assert_eq!(Solution::shortest_path_binary_matrix(grid), expected);
        }
    }
}

fn main() {}
