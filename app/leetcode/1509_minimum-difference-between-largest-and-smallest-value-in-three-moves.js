// Given an array nums, you are allowed to choose one element of nums and change it by any value in one move.

// Return the minimum difference between the largest and smallest value of nums after perfoming at most 3 moves.

// Example:
// Input: nums = [5,3,2,4]
// Output: 0
// Explanation: Change the array [5,3,2,4] to [2,2,2,2].
// The difference between the maximum and minimum is 2-2 = 0.

/**
 * Time complexity : O(n)
 * Space complexity : O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function (nums) {
  if (nums.length <= 4) {
    return 0;
  }

  nums.sort((x, y) => x - y);

  let minValue = Infinity;

  let i = 0;
  while (i <= 3) {
    minValue = Math.min(minValue, nums[nums.length - 4 + i] - nums[i]);
    // Math.min(
    //   nums[nums.length - 4] - nums[0],
    //   nums[nums.length - 3] - nums[1],
    //   nums[nums.length - 2] - nums[2],
    //   nums[nums.length - 1] - nums[3]
    // );

    i++;
  }

  return minValue;
};
