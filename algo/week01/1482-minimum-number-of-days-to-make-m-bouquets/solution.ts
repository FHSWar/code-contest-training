/**
 * 1482. 制作 m 束花所需的最少天数
 * https://leetcode.cn/problems/minimum-number-of-days-to-make-m-bouquets/
 *
 * 二分天数；滑动统计连续可摘长度。
 */

export function minDays(bloomDay: number[], m: number, k: number): number {
  const n = bloomDay.length;
  if (m * k > n) return -1;

  const ok = (days: number): boolean => {
    let bouquets = 0;
    let run = 0;
    for (const d of bloomDay) {
      if (d <= days) {
        run++;
        if (run === k) {
          bouquets++;
          run = 0;
        }
      } else {
        run = 0;
      }
    }
    return bouquets >= m;
  };

  let lo = 1;
  let hi = Math.max(...bloomDay);
  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (ok(mid)) hi = mid;
    else lo = mid + 1;
  }
  return ok(lo) ? lo : -1;
}
