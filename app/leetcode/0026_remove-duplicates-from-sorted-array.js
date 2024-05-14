// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Clarification:

// Confused why the returned value is an integer but your answer is an array?

// Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.

// Internally you can think of this:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2]
// Explanation: Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the returned length.

/**
 * 題目要求 mutate 陣列而非回傳新陣列，跟一般設計原則牴觸，可能造成這題的不喜歡數特多 XD
 *
 * 第一個想法是迴圈碰到相同元素，就將該元素移除，
 * 但在迴圈的過程一直變更 nums 與 i 也是不太好的做法。
 *
 * Time complexity : O(n)
 * Space complexity : O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) {
      nums.splice(i, 1);
      i -= 1;
    }
  }

  return nums.length;
};

/**
 * 這個做法紀錄不重複的 index 並塞到對應的 nums 位置，
 * 應該是題目比較希望我們使用的方式。
 *
 * Time complexity : O(n)
 * Space complexity : O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let index = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] !== nums[i]) {
      index++;
    }

    nums[index] = nums[i];
  }

  return index + 1;
};
