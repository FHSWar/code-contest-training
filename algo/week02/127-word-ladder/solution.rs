//! 127. 单词接龙 — BFS 枚举单字母替换，字节级操作
//! https://leetcode.cn/problems/word-ladder/

use std::collections::{HashSet, VecDeque};

struct Solution;

impl Solution {
    pub fn ladder_length(begin_word: String, end_word: String, word_list: Vec<String>) -> i32 {
        let word_set: HashSet<Vec<u8>> = word_list.iter().map(|w| w.as_bytes().to_vec()).collect();
        let end_bytes = end_word.as_bytes().to_vec();
        if !word_set.contains(&end_bytes) {
            return 0;
        }

        let begin_bytes = begin_word.as_bytes().to_vec();
        let mut queue = VecDeque::new();
        let mut visited = HashSet::new();
        queue.push_back(begin_bytes.clone());
        visited.insert(begin_bytes);
        let mut steps = 1;

        while !queue.is_empty() {
            let size = queue.len();
            for _ in 0..size {
                let word = queue.pop_front().unwrap();
                for j in 0..word.len() {
                    let mut next = word.clone();
                    for c in b'a'..=b'z' {
                        next[j] = c;
                        if next == end_bytes {
                            return steps + 1;
                        }
                        if word_set.contains(&next) && !visited.contains(&next) {
                            visited.insert(next.clone());
                            queue.push_back(next.clone());
                        }
                    }
                }
            }
            steps += 1;
        }

        0
    }
}

#[cfg(test)]
mod tests {
    use super::Solution;

    #[test]
    fn ladder_length_matches_shared_cases() {
        let cases: Vec<(&str, &str, Vec<&str>, i32)> = vec![
            ("hit", "cog", vec!["hot", "dot", "dog", "lot", "log", "cog"], 5),
            ("hit", "cog", vec!["hot", "dot", "dog", "lot", "log"], 0),
            ("a", "c", vec!["a", "b", "c"], 2),
        ];
        for (begin, end, list, expected) in cases {
            let word_list: Vec<String> = list.into_iter().map(String::from).collect();
            assert_eq!(
                Solution::ladder_length(begin.to_string(), end.to_string(), word_list),
                expected
            );
        }
    }
}

fn main() {}
