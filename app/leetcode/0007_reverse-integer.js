// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example:
// Input: x = 123
// Output: 321

/**
 * 透過字元運算倒轉數字
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const MAX_VALUE = 2 ** 31 - 1;
  const MIN_VALUE = 2 ** 31 * -1;

  const sign = x < 0 ? -1 : 1;
  const stringX = `${Math.abs(x)}`;

  let reverseX = "";

  for (let i = stringX.length - 1; i >= 0; i--) {
    reverseX += stringX[i];
  }

  const result = Number(reverseX) * sign;

  if (result > MAX_VALUE || result < MIN_VALUE) {
    return 0;
  }

  return result;
};
