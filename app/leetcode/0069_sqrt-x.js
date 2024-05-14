// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

// Example:
// Input: x = 4
// Output: 2

/**
 * Time complexity: sqrt(x)
 * Space complexity: O(1)
 *
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let n = 0;

  while (n * n <= x) {
    n++;
  }

  return n - 1;
};

/**
 * Binary Search
 *
 * Time complexity: O(log(x))
 * Space complexity: O(1)
 *
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 1;
  let right = x;

  while (left <= right) {
    const middle = left + parseInt((right - left) / 2, 10);

    if (middle * middle > x) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return right;
};
