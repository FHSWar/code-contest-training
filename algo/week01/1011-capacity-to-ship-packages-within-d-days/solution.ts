/**
 * 1011. 在 D 天内送达包裹的能力
 * https://leetcode.cn/problems/capacity-to-ship-packages-within-d-days/
 *
 * 二分船载重量：贪心划分天数。
 */

export function shipWithinDays(weights: number[], days: number): number {
  const can = (cap: number): boolean => {
    let d = 1;
    let cur = 0;
    for (const w of weights) {
      if (w > cap) return false;
      if (cur + w > cap) {
        d++;
        cur = w;
      } else {
        cur += w;
      }
      if (d > days) return false;
    }
    return true;
  };

  let lo = Math.max(...weights);
  let hi = weights.reduce((a, b) => a + b, 0);
  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (can(mid)) hi = mid;
    else lo = mid + 1;
  }
  return lo;
}
