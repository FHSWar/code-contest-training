//! 130. 被围绕的区域
//! https://leetcode.cn/problems/surrounded-regions/

struct Solution;

impl Solution {
    pub fn solve(board: &mut Vec<Vec<char>>) {
        let m = board.len();
        if m == 0 {
            return;
        }
        let n = board[0].len();

        fn dfs(board: &mut Vec<Vec<char>>, r: isize, c: isize, m: isize, n: isize) {
            if r < 0 || r >= m || c < 0 || c >= n {
                return;
            }
            let (ru, cu) = (r as usize, c as usize);
            if board[ru][cu] != 'O' {
                return;
            }
            board[ru][cu] = '#';
            dfs(board, r + 1, c, m, n);
            dfs(board, r - 1, c, m, n);
            dfs(board, r, c + 1, m, n);
            dfs(board, r, c - 1, m, n);
        }

        let (mi, ni) = (m as isize, n as isize);
        for r in 0..mi {
            dfs(board, r, 0, mi, ni);
            dfs(board, r, ni - 1, mi, ni);
        }
        for c in 0..ni {
            dfs(board, 0, c, mi, ni);
            dfs(board, mi - 1, c, mi, ni);
        }

        for r in 0..m {
            for c in 0..n {
                if board[r][c] == 'O' {
                    board[r][c] = 'X';
                } else if board[r][c] == '#' {
                    board[r][c] = 'O';
                }
            }
        }
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;

    #[test]
    fn solve_matches_shared_cases() {
        let mut b1 = vec![
            vec!['X', 'X', 'X', 'X'],
            vec!['X', 'O', 'O', 'X'],
            vec!['X', 'X', 'O', 'X'],
            vec!['X', 'O', 'X', 'X'],
        ];
        Solution::solve(&mut b1);
        assert_eq!(
            b1,
            vec![
                vec!['X', 'X', 'X', 'X'],
                vec!['X', 'X', 'X', 'X'],
                vec!['X', 'X', 'X', 'X'],
                vec!['X', 'O', 'X', 'X'],
            ]
        );

        let mut b2 = vec![vec!['X']];
        Solution::solve(&mut b2);
        assert_eq!(b2, vec![vec!['X']]);

        let mut b3 = vec![
            vec!['O', 'O', 'O'],
            vec!['O', 'O', 'O'],
            vec!['O', 'O', 'O'],
        ];
        Solution::solve(&mut b3);
        assert_eq!(
            b3,
            vec![
                vec!['O', 'O', 'O'],
                vec!['O', 'O', 'O'],
                vec!['O', 'O', 'O'],
            ]
        );
    }
}

fn main() {}
