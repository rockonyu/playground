// Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

// A word is a maximal substring consisting of non-space characters only.

// Example 1:
// Input: s = "Hello World"
// Output: 5

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const arr = s.trim().split(" ");

  return arr[arr.length - 1].length;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let lastWord = "";

  for (let i = s.length - 1; i >= 0; i--) {
    if (lastWord !== "" && s[i] === " ") {
      break;
    }

    if (s[i] === " ") {
      // skip side space
      continue;
    }

    lastWord = s[i] + lastWord;
  }

  return lastWord.length;
};
