// Given a string s, find the length of the longest substring without repeating characters.

// Example:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

/**
 * 暴力解： 使用兩個迴圈遍歷所有解，並計算最長不重複的字元
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) {
    return s.length;
  }

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let subString = s[i];

    for (let j = i + 1; j < s.length; j++) {
      if (subString.includes(s[j])) {
        break;
      }

      subString += s[j];
    }

    result = Math.max(result, subString.length);
  }

  return result;
};

/**
 * 使用變數紀錄最後不重複的起始位置與相同字元前一次出現的位置
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
  if (s.length <= 1) {
    return s.length;
  }

  let maxLength = 0;
  let lastNotDuplicateIndex = 0;
  let charIndexMap = new Map();

  for (let i = 0; i < s.length; i++) {
    if (charIndexMap.has(s[i])) {
        const lastSameCharacterIndex = charIndexMap.get(s[i]);
      // 判斷最後不重複字元 index 與先前相同字元的 index 誰比較大
      lastNotDuplicateIndex = Math.max(lastNotDuplicateIndex, lastSameCharacterIndex + 1);
    }

    // 保存當前字元的 index 供後續判斷是否重複
    charIndexMap.set(s[i], i);
    maxLength = Math.max(maxLength, i - lastNotDuplicateIndex + 1);
  }

  return maxLength;
};
