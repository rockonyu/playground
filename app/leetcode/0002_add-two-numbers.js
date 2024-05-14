// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * 此題要求回傳值為 ListNode，主要邏輯在處理結構 & 判斷是否進位
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const result = new ListNode(null);
  let head = result;
  let carry = 0;

  while (l1 || l2 || carry) {
    const val1 = (l1 && l1.val) || 0;
    const val2 = (l2 && l2.val) || 0;

    const sum = val1 + val2 + carry;

    carry = sum >= 10 ? 1 : 0;
    head.next = new ListNode(sum % 10);

    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
    head = head.next;
  }

  return result.next;
};
