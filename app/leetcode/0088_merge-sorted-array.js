// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.

// Example1:
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

// 題目需求是直接變更 nums1 陣列，因此較簡單的思路是兩個陣列各自從 m - 1 與 n - 1 比較起，取得較大的數後放到 nums1 的尾端
// 持續比較直到使用完 nums2 的所有數字

/**
 * Time complexity : O(n)
 * Space complexity : O(1)
 *
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];

      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }

    k--;
  }
};
