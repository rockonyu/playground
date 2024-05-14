// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R

// And then read line by line: "PAHNAPLSIIGYIR"

// Example:
// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"

/**
 * 暴力解: 碰到陣列 index 邊界再變更 increment 的值 (1 or -1)
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }

  const result = new Array(numRows).fill("");

  let targetIndex = 0;
  let increment = -1;

  for (let i = 0; i < s.length; i++) {
    result[targetIndex] += s[i];

    if (targetIndex === 0 || targetIndex === numRows - 1) {
      increment *= -1;
    }

    targetIndex += increment;
  }

  return result.join("");
};
