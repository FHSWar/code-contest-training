//! 733. 图像渲染 — DFS Flood Fill
//! https://leetcode.cn/problems/flood-fill/

struct Solution;

impl Solution {
    pub fn flood_fill(mut image: Vec<Vec<i32>>, sr: i32, sc: i32, color: i32) -> Vec<Vec<i32>> {
        let orig = image[sr as usize][sc as usize];
        if orig == color {
            return image;
        }

        let m = image.len();
        let n = image[0].len();
        let dirs: [(i32, i32); 4] = [(0, 1), (0, -1), (1, 0), (-1, 0)];

        fn dfs(
            image: &mut Vec<Vec<i32>>,
            r: usize,
            c: usize,
            m: usize,
            n: usize,
            orig: i32,
            color: i32,
            dirs: &[(i32, i32); 4],
        ) {
            if image[r][c] != orig {
                return;
            }
            image[r][c] = color;
            for &(dr, dc) in dirs {
                let nr = r as i32 + dr;
                let nc = c as i32 + dc;
                if nr >= 0 && nr < m as i32 && nc >= 0 && nc < n as i32 {
                    dfs(image, nr as usize, nc as usize, m, n, orig, color, dirs);
                }
            }
        }

        dfs(
            &mut image,
            sr as usize,
            sc as usize,
            m,
            n,
            orig,
            color,
            &dirs,
        );
        image
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;

    #[test]
    fn flood_fill_matches_shared_cases() {
        let cases: Vec<(Vec<Vec<i32>>, i32, i32, i32, Vec<Vec<i32>>)> = vec![
            (
                vec![vec![1, 1, 1], vec![1, 1, 0], vec![1, 0, 1]],
                1,
                1,
                2,
                vec![vec![2, 2, 2], vec![2, 2, 0], vec![2, 0, 1]],
            ),
            (
                vec![vec![0, 0, 0], vec![0, 0, 0]],
                0,
                0,
                0,
                vec![vec![0, 0, 0], vec![0, 0, 0]],
            ),
            (
                vec![vec![0, 0, 0], vec![0, 1, 1]],
                1,
                1,
                1,
                vec![vec![0, 0, 0], vec![0, 1, 1]],
            ),
        ];
        for (image, sr, sc, color, expected) in cases {
            assert_eq!(Solution::flood_fill(image, sr, sc, color), expected);
        }
    }
}

fn main() {}
