// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

// The algorithm for myAtoi(string s) is as follows:

// Read in and ignore any leading whitespace.
// Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
// Read in next the characters until the next non-digit charcter or the end of the input is reached. The rest of the string is ignored.
// Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
// If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
// Return the integer as the final result.

/**
 * 無恥使用 parseInt
 *
 * Time Complexity: ? 96ms
 * Space Complexity: O(1)
 *
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const MAX_VALUE = 2 ** 31 - 1;
  const MIN_VALUE = 2 ** 31 * -1;

  const result = parseInt(s, 10);

  if (Number.isNaN(result)) {
    return 0;
  }

  return Math.max(Math.min(MAX_VALUE, result), MIN_VALUE);
};

/**
 * 使用 ASCII 判斷每個字元
 *
 * Time Complexity: O(n) 88ms
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const MAX_VALUE = 2 ** 31 - 1;
  const MIN_VALUE = 2 ** 31 * -1;

  const ASCII = {
    SPACE: 32,
    PLUS: 43,
    MINUS: 45,
    ZERO: 48,
    NINE: 57,
  };

  let numString = "";
  let sign = null;

  for (let i = 0; i < s.length; i++) {
    const charCode = s.charCodeAt(i);

    if (charCode === ASCII.SPACE && numString === "" && sign === null) {
      continue;
    }

    if (
      (charCode === ASCII.PLUS || charCode === ASCII.MINUS) &&
      numString === "" &&
      sign === null
    ) {
      sign = charCode === ASCII.MINUS ? -1 : 1;
      continue;
    }

    if (charCode < ASCII.ZERO || charCode > ASCII.NINE) {
      numString = numString || "0";
      break;
    }

    numString += s[i];
  }

  const result = Number(numString) * (sign || 1);

  return Math.max(Math.min(MAX_VALUE, result), MIN_VALUE);
};
