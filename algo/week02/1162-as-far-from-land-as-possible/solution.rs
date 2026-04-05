//! 1162. 地图分析 — 多源 BFS
//! https://leetcode.cn/problems/as-far-from-land-as-possible/

use std::collections::VecDeque;

struct Solution;

impl Solution {
    pub fn max_distance(mut grid: Vec<Vec<i32>>) -> i32 {
        let n = grid.len();
        let mut queue: VecDeque<(usize, usize)> = VecDeque::new();

        for i in 0..n {
            for j in 0..n {
                if grid[i][j] == 1 {
                    queue.push_back((i, j));
                }
            }
        }

        if queue.is_empty() || queue.len() == n * n {
            return -1;
        }

        let dirs: [(i32, i32); 4] = [(0, 1), (0, -1), (1, 0), (-1, 0)];
        let mut dist = -1;

        while !queue.is_empty() {
            let size = queue.len();
            for _ in 0..size {
                let (r, c) = queue.pop_front().unwrap();
                for &(dr, dc) in &dirs {
                    let nr = r as i32 + dr;
                    let nc = c as i32 + dc;
                    if nr >= 0 && nr < n as i32 && nc >= 0 && nc < n as i32 {
                        let (nru, ncu) = (nr as usize, nc as usize);
                        if grid[nru][ncu] == 0 {
                            grid[nru][ncu] = 1;
                            queue.push_back((nru, ncu));
                        }
                    }
                }
            }
            dist += 1;
        }

        dist
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;

    #[test]
    fn max_distance_matches_shared_cases() {
        assert_eq!(
            Solution::max_distance(vec![vec![1, 0, 1], vec![0, 0, 0], vec![1, 0, 1]]),
            2
        );
        assert_eq!(
            Solution::max_distance(vec![vec![1, 0, 0], vec![0, 0, 0], vec![0, 0, 0]]),
            4
        );
        assert_eq!(
            Solution::max_distance(vec![vec![1, 1, 1], vec![1, 1, 1], vec![1, 1, 1]]),
            -1
        );
        assert_eq!(
            Solution::max_distance(vec![vec![0, 0, 0], vec![0, 0, 0], vec![0, 0, 0]]),
            -1
        );
    }
}

fn main() {}
