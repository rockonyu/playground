// Given a string s, return the longest palindromic substring in s.

// Example:
// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

/**
 * 暴力法: 判斷回文的 checkIsPalindrome 太低效會逾時
 *
 * Time Complexity: O(n^3)
 * Space Complexity: O(1)
 *
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const checkIsPalindrome = (s) => {
    for (let i = 0; i < s.length / 2; i++) {
      if (s[i] !== s[s.length - i - 1]) {
        return false;
      }
    }

    return true;
  };

  let result = "";

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      let subString = s.substring(i, j + 1);

      if (checkIsPalindrome(subString) && subString.length > result.length) {
        result = subString;
      }
    }
  }

  return result;
};

/**
 * Expand Around Center
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 *
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const getPalindromeAroundLen = (s, left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }

    // 計算 left 與 right 之間有幾個元素
    return right - left - 1;
  };

  let start = 0;
  let palindromeLength = 0;

  for (let i = 0; i < s.length; i++) {
    const oddLength = getPalindromeAroundLen(s, i, i);
    const eventLength = getPalindromeAroundLen(s, i, i + 1);
    const largerLength = Math.max(oddLength, eventLength);

    if (largerLength > palindromeLength) {
      start = i - Math.floor((largerLength - 1) / 2);
      palindromeLength = largerLength;
    }
  }

  return s.substr(start, palindromeLength);
};
