// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Follow up: Could you do this in one pass?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Time complexity : O(L), L is length of the list
 * Space complexity : O(1)
 *
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const arr = [];

  while (head !== null) {
    arr.push(head.val);

    head = head.next;
  }

  arr.splice(arr.length - n, 1);

  const newHead = new ListNode(null);
  let currNode = newHead;

  for (let item of arr) {
    currNode.next = new ListNode(item);
    currNode = currNode.next;
  }

  return newHead.next;
};

/**
 * Time complexity : O(L), L is length of the list
 * Space complexity : O(1)
 *
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const first = new ListNode(null);
  first.next = head;

  let length = 0;
  let curr = first;

  while (curr.next !== null) {
    curr = curr.next;
    length++;
  }

  let skipLength = length - n;

  curr = first;

  while (skipLength > 0) {
    curr = curr.next;
    skipLength--;
  }

  curr.next = curr.next ? curr.next.next : null;

  return first.next;
};

/**
 * Time complexity : O(L), L is length of the list
 * Space complexity : O(1)
 *
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const dummy = new ListNode(null);
  dummy.next = head;
  let first = dummy;
  let second = dummy;

  for (let i = 0; i <= n; i++) {
    first = first.next;
  }

  while (first != null) {
    first = first.next;
    second = second.next;
  }

  second.next = second.next.next;

  return dummy.next;
};
