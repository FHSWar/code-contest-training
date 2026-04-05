//! 695. 岛屿的最大面积 — DFS 沉岛返回面积
//! https://leetcode.cn/problems/max-area-of-island/

struct Solution;

impl Solution {
    pub fn max_area_of_island(mut grid: Vec<Vec<i32>>) -> i32 {
        let m = grid.len();
        let n = grid[0].len();
        let dirs: [(i32, i32); 4] = [(0, 1), (0, -1), (1, 0), (-1, 0)];

        fn dfs(
            grid: &mut Vec<Vec<i32>>,
            r: usize,
            c: usize,
            m: usize,
            n: usize,
            dirs: &[(i32, i32); 4],
        ) -> i32 {
            if grid[r][c] != 1 {
                return 0;
            }
            grid[r][c] = 0;
            let mut area = 1;
            for &(dr, dc) in dirs {
                let nr = r as i32 + dr;
                let nc = c as i32 + dc;
                if nr >= 0 && nr < m as i32 && nc >= 0 && nc < n as i32 {
                    area += dfs(grid, nr as usize, nc as usize, m, n, dirs);
                }
            }
            area
        }

        let mut max_area = 0;
        for r in 0..m {
            for c in 0..n {
                if grid[r][c] == 1 {
                    let area = dfs(&mut grid, r, c, m, n, &dirs);
                    max_area = max_area.max(area);
                }
            }
        }

        max_area
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;

    #[test]
    fn max_area_matches_shared_cases() {
        let cases: Vec<(Vec<Vec<i32>>, i32)> = vec![
            (
                vec![
                    vec![0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                    vec![0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
                    vec![0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                    vec![0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
                    vec![0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
                    vec![0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                    vec![0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
                    vec![0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
                ],
                6,
            ),
            (vec![vec![0, 0, 0, 0, 0, 0, 0, 0]], 0),
            (vec![vec![1]], 1),
            (vec![vec![1, 1], vec![1, 0]], 3),
        ];
        for (grid, expected) in cases {
            assert_eq!(Solution::max_area_of_island(grid), expected);
        }
    }
}

fn main() {}
