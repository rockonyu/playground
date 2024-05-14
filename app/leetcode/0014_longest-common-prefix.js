// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

/**
 * Time Complexity: O(S), S 是所有字串的長度總和
 * Space Complexity: O(1)
 *
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }

  let match = strs[0];

  for (let i = 1; i < strs.length; i++) {
    let curr = "";

    for (let j = 0; j < strs[i].length; j++) {
      if (match[j] === strs[i][j]) {
        curr += match[j];
        continue;
      }

      break;
    }

    match = curr;
  }

  return match;
};
