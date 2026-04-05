//! 934. 最短的桥 — DFS 标记 + BFS 扩展
//! https://leetcode.cn/problems/shortest-bridge/

use std::collections::VecDeque;

struct Solution;

impl Solution {
    pub fn shortest_bridge(mut grid: Vec<Vec<i32>>) -> i32 {
        let n = grid.len();
        let dirs: [(i32, i32); 4] = [(0, 1), (0, -1), (1, 0), (-1, 0)];
        let mut queue: VecDeque<(usize, usize)> = VecDeque::new();

        fn dfs(
            grid: &mut Vec<Vec<i32>>,
            queue: &mut VecDeque<(usize, usize)>,
            r: isize,
            c: isize,
            n: isize,
        ) {
            if r < 0 || r >= n || c < 0 || c >= n {
                return;
            }
            let (ru, cu) = (r as usize, c as usize);
            if grid[ru][cu] != 1 {
                return;
            }
            grid[ru][cu] = 2;
            queue.push_back((ru, cu));
            dfs(grid, queue, r + 1, c, n);
            dfs(grid, queue, r - 1, c, n);
            dfs(grid, queue, r, c + 1, n);
            dfs(grid, queue, r, c - 1, n);
        }

        let ni = n as isize;
        'outer: for i in 0..ni {
            for j in 0..ni {
                if grid[i as usize][j as usize] == 1 {
                    dfs(&mut grid, &mut queue, i, j, ni);
                    break 'outer;
                }
            }
        }

        let mut steps = 0;
        while !queue.is_empty() {
            let size = queue.len();
            for _ in 0..size {
                let (r, c) = queue.pop_front().unwrap();
                for &(dr, dc) in &dirs {
                    let nr = r as i32 + dr;
                    let nc = c as i32 + dc;
                    if nr >= 0 && nr < n as i32 && nc >= 0 && nc < n as i32 {
                        let (nru, ncu) = (nr as usize, nc as usize);
                        if grid[nru][ncu] == 1 {
                            return steps;
                        }
                        if grid[nru][ncu] == 0 {
                            grid[nru][ncu] = 2;
                            queue.push_back((nru, ncu));
                        }
                    }
                }
            }
            steps += 1;
        }

        steps
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;

    #[test]
    fn shortest_bridge_matches_shared_cases() {
        assert_eq!(
            Solution::shortest_bridge(vec![vec![0, 1], vec![1, 0]]),
            1
        );
        assert_eq!(
            Solution::shortest_bridge(vec![vec![0, 1, 0], vec![0, 0, 0], vec![0, 0, 1]]),
            2
        );
        assert_eq!(
            Solution::shortest_bridge(vec![
                vec![1, 1, 1, 1, 1],
                vec![1, 0, 0, 0, 1],
                vec![1, 0, 1, 0, 1],
                vec![1, 0, 0, 0, 1],
                vec![1, 1, 1, 1, 1],
            ]),
            1
        );
    }
}

fn main() {}
