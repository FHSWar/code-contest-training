//! 994. 腐烂的橘子
//! https://leetcode.cn/problems/rotting-oranges/

use std::collections::VecDeque;

struct Solution;

impl Solution {
    pub fn oranges_rotting(mut grid: Vec<Vec<i32>>) -> i32 {
        let m = grid.len();
        let n = grid[0].len();
        let mut queue: VecDeque<(usize, usize)> = VecDeque::new();
        let mut fresh: i32 = 0;

        for r in 0..m {
            for c in 0..n {
                if grid[r][c] == 2 {
                    queue.push_back((r, c));
                } else if grid[r][c] == 1 {
                    fresh += 1;
                }
            }
        }

        if fresh == 0 {
            return 0;
        }

        let dirs: [(i32, i32); 4] = [(1, 0), (-1, 0), (0, 1), (0, -1)];
        let mut minutes = 0;

        while !queue.is_empty() {
            let size = queue.len();
            for _ in 0..size {
                let (r, c) = queue.pop_front().unwrap();
                for &(dr, dc) in &dirs {
                    let nr = r as i32 + dr;
                    let nc = c as i32 + dc;
                    if nr >= 0
                        && nr < m as i32
                        && nc >= 0
                        && nc < n as i32
                        && grid[nr as usize][nc as usize] == 1
                    {
                        grid[nr as usize][nc as usize] = 2;
                        fresh -= 1;
                        queue.push_back((nr as usize, nc as usize));
                    }
                }
            }
            minutes += 1;
        }

        if fresh == 0 {
            minutes - 1
        } else {
            -1
        }
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;

    #[test]
    fn oranges_rotting_matches_shared_cases() {
        assert_eq!(
            Solution::oranges_rotting(vec![vec![2, 1, 1], vec![1, 1, 0], vec![0, 1, 1]]),
            4
        );
        assert_eq!(
            Solution::oranges_rotting(vec![vec![2, 1, 1], vec![0, 1, 1], vec![1, 0, 1]]),
            -1
        );
        assert_eq!(Solution::oranges_rotting(vec![vec![0, 2]]), 0);
        assert_eq!(Solution::oranges_rotting(vec![vec![0]]), 0);
        assert_eq!(Solution::oranges_rotting(vec![vec![1]]), -1);
        assert_eq!(
            Solution::oranges_rotting(vec![vec![2, 1, 1], vec![1, 1, 1], vec![0, 1, 2]]),
            2
        );
    }
}

fn main() {}
