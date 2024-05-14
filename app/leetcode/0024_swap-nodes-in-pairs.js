// Given a linked list, swap every two adjacent nodes and return its head.

// Example:
// Input: head = [1,2,3,4]
// Output: [2,1,4,3]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 建立一個新的 ListNode (node) 並回傳
 *
 * Time complexity : O(n)
 * Space complexity : O(n)
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  const dummy = new ListNode(null);
  let node = dummy;

  let curr = head;
  let prev = null;

  while (curr !== null) {
    if (prev === null) {
      prev = new ListNode(curr.val);
      curr = curr.next;
      continue;
    }

    if (!dummy.next) {
      dummy.next = curr;
    }

    node.next = new ListNode(curr.val);
    node.next.next = new ListNode(prev.val);
    node = node.next.next;

    prev = null;
    curr = curr.next;
  }

  if (prev) {
    node.next = prev;
  }

  return dummy.next;
};

/**
 * Time complexity : O(n)
 * Space complexity : O(n)
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  const dummy = new ListNode(0, head);
  let curr = dummy;

  while (curr.next && curr.next.next) {
    const first = curr.next;
    const second = curr.next.next;

    // 1 -> 3
    first.next = second.next;
    // 將開頭設為 2
    curr.next = second;
    // 2 -> 1
    second.next = first;

    curr = curr.next.next;
  }

  return dummy.next;
};

/**
 * Recursive
 *
 * Time complexity : O(n)
 * Space complexity : O(n)
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (head === null || head.next === null) {
    return head;
  }

  const first = head;
  const second = head.next;
  const third = head.next.next;

  second.next = first;
  first.next = swapPairs(third);

  return second;
};
