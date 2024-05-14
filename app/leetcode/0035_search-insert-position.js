// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

/**
 * Time complexity : O(n)
 * Space complexity : O(1)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  for (let i = 0; i <= nums.length; i++) {
    if (target <= nums[i]) {
      return i;
    }
  }

  return nums.length;
};
