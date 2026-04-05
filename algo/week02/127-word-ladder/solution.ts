/**
 * 127. 单词接龙
 * https://leetcode.cn/problems/word-ladder/
 *
 * BFS 枚举单字母替换，HashSet 加速查找。
 */

export function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  const queue: string[] = [beginWord];
  const visited = new Set<string>([beginWord]);
  let steps = 1;

  while (queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const word = queue.shift()!;
      const chars = word.split("");
      for (let j = 0; j < chars.length; j++) {
        const orig = chars[j];
        for (let c = 97; c <= 122; c++) {
          chars[j] = String.fromCharCode(c);
          const next = chars.join("");
          if (next === endWord) return steps + 1;
          if (wordSet.has(next) && !visited.has(next)) {
            visited.add(next);
            queue.push(next);
          }
        }
        chars[j] = orig;
      }
    }
    steps++;
  }

  return 0;
}
