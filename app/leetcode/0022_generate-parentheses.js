// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

const backtrack = (
  list,
  currStr,
  currOpenLength,
  currCloseLength,
  halfLength
) => {
  if (currStr.length === halfLength * 2) {
    list.push(currStr);
  }

  if (currOpenLength < halfLength) {
    backtrack(
      list,
      `${currStr}(`,
      currOpenLength + 1,
      currCloseLength,
      halfLength
    );
  }

  if (currCloseLength < currOpenLength) {
    backtrack(
      list,
      `${currStr})`,
      currOpenLength,
      currCloseLength + 1,
      halfLength
    );
  }
};

/**
 * Complexity Analysis
 * https://leetcode.com/problems/generate-parentheses/solution/
 *
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];

  backtrack(result, "", 0, 0, n);

  return result;
};
