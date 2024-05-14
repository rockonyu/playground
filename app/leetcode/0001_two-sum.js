// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

/**
 * 使用迴圈與 lastIndexOf 從陣列兩側分頭尋找，終止條件設定為倒數第二個元素
 * 需判斷 lastIndexOfRemain 與當前 index 是否相同
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    const remain = target - nums[i];
    const lastIndexOfRemain = nums.lastIndexOf(remain);

    if (lastIndexOfRemain >= 0 && lastIndexOfRemain !== i) {
      return [i, lastIndexOfRemain];
    }
  }
};

/**
 * 使用物件保存已經出現過的數字，注意需先判斷無解才將新數字加進物件
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numsMap = {};

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    const remain = target - curr;

    if (remain in numsMap) {
      return [numsMap[remain], i];
    }

    numsMap[curr] = i;
  }
};
