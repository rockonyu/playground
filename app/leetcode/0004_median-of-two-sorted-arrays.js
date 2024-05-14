// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// Example:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

/**
 * 暴力解
 *
 * Time Complexity: O(log(m + n))
 * Space Complexity: O(m + n)
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const mergedNums = nums1.concat(nums2).sort((x, y) => x - y);
  const totalLength = mergedNums.length;
  const median = Math.floor(totalLength / 2);

  if (totalLength % 2 === 0) {
    return (mergedNums[median - 1] + mergedNums[median]) / 2;
  }

  return mergedNums[median];
};

/**
 * nums1 與 nums2 為排序過的陣列，先計算中位數 index 再逐個取值
 *
 * Time Complexity: O(log(m + n))
 * Space Complexity: O(1)
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const totalLength = nums1.length + nums2.length;
  const median = Math.floor(totalLength / 2);

  let index1 = 0;
  let index2 = 0;
  let curr, prev;

  for (let i = 0; i <= median; i++) {
    prev = curr;

    if (
      nums1[index1] === undefined ||
      nums1[index1] > nums2[index2] ||
      (nums1[index1] === nums2[index2] && index1 > index2)
    ) {
      curr = nums2[index2];
      index2++;
    } else {
      curr = nums1[index1];
      index1++;
    }
  }

  return totalLength % 2 === 0 ? (curr + prev) / 2 : curr;
};
