//! 752. 打开转盘锁 — BFS 遍历 4 位状态空间
//! https://leetcode.cn/problems/open-the-lock/

use std::collections::{HashSet, VecDeque};

struct Solution;

impl Solution {
    pub fn open_lock(deadends: Vec<String>, target: String) -> i32 {
        let dead: HashSet<String> = deadends.into_iter().collect();
        if dead.contains("0000") {
            return -1;
        }
        if target == "0000" {
            return 0;
        }

        let mut queue = VecDeque::new();
        let mut visited = HashSet::new();
        queue.push_back("0000".to_string());
        visited.insert("0000".to_string());
        let mut steps = 0;

        while !queue.is_empty() {
            steps += 1;
            let size = queue.len();
            for _ in 0..size {
                let state = queue.pop_front().unwrap();
                let bytes = state.as_bytes();
                for w in 0..4 {
                    for &d in &[1i8, -1i8] {
                        let mut next_bytes = bytes.to_vec();
                        next_bytes[w] =
                            b'0' + ((next_bytes[w] - b'0') as i8 + d).rem_euclid(10) as u8;
                        let next = String::from_utf8(next_bytes).unwrap();
                        if next == target {
                            return steps;
                        }
                        if !dead.contains(&next) && !visited.contains(&next) {
                            visited.insert(next.clone());
                            queue.push_back(next);
                        }
                    }
                }
            }
        }

        -1
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;

    #[test]
    fn open_lock_matches_shared_cases() {
        let cases: Vec<(Vec<&str>, &str, i32)> = vec![
            (vec!["0201", "0101", "0102", "1212", "2002"], "0202", 6),
            (vec!["8888"], "0009", 1),
            (
                vec!["8887", "8889", "8878", "8898", "8788", "8988", "7888", "9888"],
                "8888",
                -1,
            ),
            (vec!["0000"], "8888", -1),
        ];
        for (deadends, target, expected) in cases {
            let de: Vec<String> = deadends.into_iter().map(String::from).collect();
            assert_eq!(Solution::open_lock(de, target.to_string()), expected);
        }
    }
}

fn main() {}
