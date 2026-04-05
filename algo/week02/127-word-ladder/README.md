# 127. 单词接龙（Word Ladder）

- **链接**：[LeetCode 127](https://leetcode.cn/problems/word-ladder/)
- **难度**：困难
- **标签**：广度优先搜索、哈希表、字符串

## 题目描述

给定两个单词 `beginWord` 和 `endWord`，以及一个字典 `wordList`，找出从 `beginWord` 到 `endWord` 的**最短转换序列**的长度。转换规则：

1. 每次只能改变一个字母
2. 转换后的单词必须在 `wordList` 中

返回转换序列中的**单词数量**（包括 `beginWord` 和 `endWord`）。如果不存在这样的转换序列，返回 `0`。

## 示例

```text
输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
输出：5
解释：hit -> hot -> dot -> dog -> cog，共 5 个单词
```

```text
输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
输出：0
解释：endWord "cog" 不在字典中
```

## 约束

- `1 <= beginWord.length <= 10`
- `endWord.length == beginWord.length`
- `1 <= wordList.length <= 5000`
- `wordList[i].length == beginWord.length`
- `beginWord`、`endWord` 和 `wordList[i]` 由小写英文字母组成
- `beginWord != endWord`
- `wordList` 中的所有单词**互不相同**

## 解题思路

见 [`思路.md`](./思路.md)。

## 本地代码

解答见同目录 [`solution.ts`](./solution.ts)，另有 [`solution.py`](./solution.py)、[`solution.rs`](./solution.rs)。公共用例在 [`cases.ts`](./cases.ts)（TS 测试与文档用），Python 为 [`test_solution.py`](./test_solution.py)。
