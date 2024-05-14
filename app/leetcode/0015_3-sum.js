// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Notice that the solution set must not contain duplicate triplets.

// Example:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

/**
 * 暴力法
 *
 * Time Complexity: O(n^3)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum1 = function (nums) {
  nums.sort((x, y) => x - y);

  const arrSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          arrSet.add([nums[i], nums[j], nums[k]].join());
          break;
        }
      }
    }
  }

  return Array.from(arrSet).map((item) => item.split(","));
};

/**
 * Two Pointers
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum2(arr) {
  let res = [];
  let target = 0;

  arr.sort((a, b) => a - b);

  if (arr.length < 3) return res;

  for (let i = 0; i < arr.length - 2; i++) {
    if (i > 0 && arr[i] == arr[i - 1]) {
      continue;
    }

    if (arr[i] > target) {
      break;
    }

    let j = i + 1;
    let k = arr.length - 1;

    while (j < k) {
      let sum = arr[i] + arr[j] + arr[k];

      if (sum === target) {
        res.push([arr[i], arr[j], arr[k]]);

        while (arr[j] === arr[j + 1]) {
          j++;
        }
        while (arr[k] === arr[k - 1]) {
          k--;
        }

        j++;
        k--;
      } else if (sum < target) {
        j++;
      } else {
        k--;
      }
    }
  }

  return res;
}
