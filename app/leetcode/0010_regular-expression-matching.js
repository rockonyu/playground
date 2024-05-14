/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  // base value
  if (p === "") {
    return s === "";
  }

  const isFirstMatch = s !== "" && (s[0] === p[0] || p[0] === ".");

  // processing '*'
  if (p.length > 1 && p[1] === "*") {
    return (
      isMatch(s, p.substring(2)) || (isFirstMatch && isMatch(s.substring(1), p))
    );
  }

  // check first character match
  return isFirstMatch && isMatch(s.substring(1), p.substring(1));
};
