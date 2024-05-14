// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

// Example:
// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Time complexity : O(a + b), a === l1.length & b === l2.length
 * Space complexity : O(a + b)
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  const head = new ListNode(null);
  let curr = head;

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      curr.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      curr.next = new ListNode(l2.val);
      l2 = l2.next;
    }

    curr = curr.next;
  }

  curr.next = l1 || l2;

  return head.next;
};
