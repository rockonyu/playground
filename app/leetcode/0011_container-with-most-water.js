// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

// Notice that you may not slant the container.

// Exmaple:
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

/**
 * 從最左 & 最右邊計算面積且只移動較小的邊長直到相交
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let largestArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (right > left) {
    let lowest = Math.min(height[left], height[right]);

    largestArea = Math.max(largestArea, lowest * (right - left));

    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }

  return largestArea;
};
