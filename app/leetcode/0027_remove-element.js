// Given an array nums and a value val, remove all instances of that value in-place and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

/**
 *
 * 與 #26 解法幾乎一樣，需要略過的元素變成題目給定
 *
 * Time complexity : O(n)
 * Space complexity : O(1)
 *
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      continue;
    }

    nums[index] = nums[i];
    index++;
  }

  return index;
};
