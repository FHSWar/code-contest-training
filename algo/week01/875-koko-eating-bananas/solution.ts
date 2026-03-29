/**
 * 875. 爱吃香蕉的珂珂
 * https://leetcode.cn/problems/koko-eating-bananas/
 *
 * 二分速度 k：每小时吃 k 根，一堆吃完才能下一堆。
 */

export function minEatingSpeed(piles: number[], h: number): number {
  let lo = 1;
  let hi = Math.max(...piles);
  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    let hrs = 0;
    for (const p of piles) {
      hrs += Math.ceil(p / mid);
    }
    if (hrs <= h) hi = mid;
    else lo = mid + 1;
  }
  return lo;
}
