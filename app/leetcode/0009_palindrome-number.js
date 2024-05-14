// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

// Example:
// Input: x = 121
// Output: true

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const xString = x.toString();

  for (let i = 0; i < xString.length; i++) {
    if (xString[i] !== xString[xString.length - i - 1]) {
      return false;
    }
  }

  return true;
};

/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  let origin = x;
  let reverse = 0;

  while (origin > 0) {
    let digit = origin % 10;

    origin = Math.floor(origin / 10);

    reverse = reverse * 10 + digit;
  }

  return reverse === x;
};
