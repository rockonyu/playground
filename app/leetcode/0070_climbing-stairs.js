// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// 可以走兩步或一步，因此到達 n 階方式理應為 step(n - 1) 加上 step(n - 2)

// n = 1
// 1

// n = 2
// 1,1
// 2

// n = 3 => (n = 2 再走一階) + (n = 1 再走兩階)
// 1,1,1
// 2,1
// +
// 1,2

// n = 4 => (n = 3 再走一階) + (n = 2 再走兩階)
// 1,1,1,1
// 2,1,1
// 1,2,1
// +
// 1,1,2
// 2,2

// n = 5 => (n = 4 再走一階) + (n = 3 再走兩階)
// 1,1,1,1,1
// 2,1,1,1
// 1,2,1,1
// 1,1,2,1
// 2,2,1
// +
// 1,1,1,2
// 2,1,2
// 1,2,2

// 不做任何處理會跑到 Time Limit Exceeded，加入一個 Map 紀錄已經計算過的值
const stairsMap = new Map();

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) {
    return n;
  }

  if (stairsMap.has(n)) {
    return stairsMap.get(n);
  }

  const result = climbStairs(n - 1) + climbStairs(n - 2);

  stairsMap.set(n, result);

  return result;
};
