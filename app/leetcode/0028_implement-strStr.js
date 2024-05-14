// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

// Example:
// Input: haystack = "hello", needle = "ll"
// Output: 2

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length === 0) {
    return 0;
  }

  for (let i = 0; i < haystack.length; i++) {
    let j = 0;

    while (haystack.length - i >= needle.length && j < needle.length) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }

      j++;
    }

    if (j === needle.length) {
      return i;
    }
  }

  return -1;
};
