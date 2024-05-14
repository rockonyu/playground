/**
 * Time complexity : O(n^2)
 * Space complexity : O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;

    for (let j = i; j < nums.length; j++) {
      sum += nums[j];

      max = Math.max(max, sum);
    }
  }

  return max;
};

/**
 * Dynamic Programming, Kadane's Algorithm
 * 重點在理解 subSum 內要保存的內容是甚麼，以便後續計算最大值
 *
 * Time complexity : O(n)
 * Space complexity : O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let subSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // 如果累加的值比目前的值小，就直接拋棄
    subSum = Math.max(subSum + nums[i], nums[i]);
    maxSum = Math.max(maxSum, subSum);
  }

  return maxSum;
};
