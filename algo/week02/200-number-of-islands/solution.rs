//! 200. 岛屿数量 — DFS 沉岛
//! https://leetcode.cn/problems/number-of-islands/

struct Solution;

impl Solution {
    pub fn num_islands(mut grid: Vec<Vec<char>>) -> i32 {
        let m = grid.len();
        let n = grid[0].len();
        let dirs: [(i32, i32); 4] = [(0, 1), (0, -1), (1, 0), (-1, 0)];
        let mut count = 0;

        fn dfs(
            grid: &mut Vec<Vec<char>>,
            r: usize,
            c: usize,
            m: usize,
            n: usize,
            dirs: &[(i32, i32); 4],
        ) {
            if grid[r][c] != '1' {
                return;
            }
            grid[r][c] = '0';
            for &(dr, dc) in dirs {
                let nr = r as i32 + dr;
                let nc = c as i32 + dc;
                if nr >= 0 && nr < m as i32 && nc >= 0 && nc < n as i32 {
                    dfs(grid, nr as usize, nc as usize, m, n, dirs);
                }
            }
        }

        for r in 0..m {
            for c in 0..n {
                if grid[r][c] == '1' {
                    count += 1;
                    dfs(&mut grid, r, c, m, n, &dirs);
                }
            }
        }

        count
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;

    #[test]
    fn num_islands_matches_shared_cases() {
        let cases: Vec<(Vec<Vec<char>>, i32)> = vec![
            (
                vec![
                    vec!['1', '1', '1', '1', '0'],
                    vec!['1', '1', '0', '1', '0'],
                    vec!['1', '1', '0', '0', '0'],
                    vec!['0', '0', '0', '0', '0'],
                ],
                1,
            ),
            (
                vec![
                    vec!['1', '1', '0', '0', '0'],
                    vec!['1', '1', '0', '0', '0'],
                    vec!['0', '0', '1', '0', '0'],
                    vec!['0', '0', '0', '1', '1'],
                ],
                3,
            ),
            (vec![vec!['1']], 1),
            (vec![vec!['0']], 0),
        ];
        for (grid, expected) in cases {
            assert_eq!(Solution::num_islands(grid), expected);
        }
    }
}

fn main() {}
