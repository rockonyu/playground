// Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

// Return the quotient after dividing dividend by divisor.

// The integer division should truncate toward zero, which means losing its fractional part. For example, truncate(8.345) = 8 and truncate(-2.7335) = -2.

// Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, assume that your function returns 231 − 1 when the division result overflows.

const MAX_NUMBER = Math.pow(2, 31);
const MIN_NUMBER = -Math.pow(2, 31);

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  if (dividend === MIN_NUMBER && divisor === -1) {
    return MAX_NUMBER - 1;
  }

  if (divisor === 1) {
    return dividend;
  }

  let isNegative = false;

  if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
    isNegative = true;
  }

  let currDividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  let quotient = 0;

  while (currDividend >= divisor) {
    currDividend -= divisor;

    quotient++;
  }

  return isNegative ? -quotient : quotient;
};

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  if (dividend <= MIN_NUMBER && divisor === -1) {
    return MAX_NUMBER - 1;
  }

  if (divisor === 1) {
    return dividend;
  }

  let isNegative = false;

  if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
    isNegative = true;
  }

  let currDividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  let quotient = 0;

  const sumArr = [];
  const sumPowMap = new Map();

  let currSum = divisor;
  let pow = 1;

  // 找到最接近的總和
  while (currSum <= currDividend) {
    sumArr.push(currSum);
    sumPowMap.set(currSum, pow);

    currSum += currSum;
    pow += pow;
  }

  // 再從 sumArr 最大的值往後減並加上次方
  while (sumArr.length > 0) {
    const curr = sumArr.pop();

    if (currDividend >= curr) {
      currDividend -= curr;
      quotient += sumPowMap.get(curr);
    }
  }

  return isNegative ? -quotient : quotient;
};

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  if (dividend <= MIN_NUMBER && divisor === -1) {
    return MAX_NUMBER - 1;
  }

  if (divisor === 1) {
    return dividend;
  }

  let isNegative = false;

  if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
    isNegative = true;
  }

  let currDividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  let quotient = 0;

  // 注意 currDividend 在外部，因此會影響先前呼叫的判斷
  const subtract = (b, p) => {
    if (currDividend > b) {
      subtract(b + b, p + p);
    }

    if (currDividend >= b) {
      currDividend -= b;
      quotient += p;
    }
  };

  subtract(divisor, 1);

  return isNegative ? -quotient : quotient;
};
