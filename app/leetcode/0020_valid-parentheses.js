// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.

// Example:
// Input: s = "()"
// Output: true

/**
 * Time complexity : O(n)
 * Space complexity : O(n)
 *
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const parentheseMap = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);

  const stack = [];

  for (let item of s) {
    if (parentheseMap.has(item)) {
      const curr = stack.pop();

      if (curr !== parentheseMap.get(item)) {
        return false;
      }

      continue;
    }

    stack.push(item);
  }

  return stack.length === 0;
};
