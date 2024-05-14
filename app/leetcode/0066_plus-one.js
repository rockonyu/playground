// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example1:
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let isCarry = true;

  for (let i = digits.length - 1; isCarry && i >= 0; i--) {
    const curr = digits[i] + 1;

    isCarry = curr >= 10 ? 1 : 0;

    digits[i] = curr % 10;
  }

  return isCarry ? [1].concat(digits) : digits;
};
