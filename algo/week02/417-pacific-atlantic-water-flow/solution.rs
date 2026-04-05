//! 417. 太平洋大西洋水流问题 — 反向 DFS
//! https://leetcode.cn/problems/pacific-atlantic-water-flow/

struct Solution;

impl Solution {
    pub fn pacific_atlantic(heights: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let m = heights.len();
        let n = heights[0].len();
        let mut pacific = vec![vec![false; n]; m];
        let mut atlantic = vec![vec![false; n]; m];

        fn dfs(
            heights: &[Vec<i32>],
            visited: &mut Vec<Vec<bool>>,
            r: usize,
            c: usize,
            m: usize,
            n: usize,
        ) {
            visited[r][c] = true;
            let dirs: [(i32, i32); 4] = [(0, 1), (0, -1), (1, 0), (-1, 0)];
            for &(dr, dc) in &dirs {
                let nr = r as i32 + dr;
                let nc = c as i32 + dc;
                if nr >= 0 && nr < m as i32 && nc >= 0 && nc < n as i32 {
                    let (nru, ncu) = (nr as usize, nc as usize);
                    if !visited[nru][ncu] && heights[nru][ncu] >= heights[r][c] {
                        dfs(heights, visited, nru, ncu, m, n);
                    }
                }
            }
        }

        for i in 0..m {
            dfs(&heights, &mut pacific, i, 0, m, n);
            dfs(&heights, &mut atlantic, i, n - 1, m, n);
        }
        for j in 0..n {
            dfs(&heights, &mut pacific, 0, j, m, n);
            dfs(&heights, &mut atlantic, m - 1, j, m, n);
        }

        let mut result = Vec::new();
        for i in 0..m {
            for j in 0..n {
                if pacific[i][j] && atlantic[i][j] {
                    result.push(vec![i as i32, j as i32]);
                }
            }
        }
        result
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;

    #[test]
    fn pacific_atlantic_matches_shared_cases() {
        let mut r1 = Solution::pacific_atlantic(vec![
            vec![1, 2, 2, 3, 5],
            vec![3, 2, 3, 4, 4],
            vec![2, 4, 5, 3, 1],
            vec![6, 7, 1, 4, 5],
            vec![5, 1, 1, 2, 4],
        ]);
        r1.sort();
        assert_eq!(
            r1,
            vec![
                vec![0, 4],
                vec![1, 3],
                vec![1, 4],
                vec![2, 2],
                vec![3, 0],
                vec![3, 1],
                vec![4, 0],
            ]
        );

        let r2 = Solution::pacific_atlantic(vec![vec![1]]);
        assert_eq!(r2, vec![vec![0, 0]]);
    }
}

fn main() {}
