// Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

/**
 * 暴力法
 *
 * Time Complexity: O(n^3)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let result;
  let minDistance = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];

        const distance = Math.abs(target - sum);

        if (distance < minDistance) {
          result = sum;
          minDistance = distance;
        }
      }
    }
  }

  return result;
};

/**
 * 暴力法
 *
 * Time Complexity: O(n^3)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let result;
  let minDistance = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];

        const distance = Math.abs(target - sum);

        if (distance < minDistance) {
          result = sum;
          minDistance = distance;
        }
      }
    }
  }

  return result;
};

/**
 * Two Pointers
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((x, y) => x - y);

  let result;
  let distance = Infinity;

  for (let i = 0; i < nums.length - 2 && distance !== 0; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      const currDistance = Math.abs(target - sum);

      if (currDistance < distance) {
        distance = currDistance;
        result = sum;
      }

      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};
