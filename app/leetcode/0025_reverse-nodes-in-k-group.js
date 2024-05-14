// Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Time complexity : O(n)
 * Space complexity : O(n)
 *
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (!head) return null;

  let tail = head;

  // 找到需要反轉的最後一個元素，出現空代表長度不足，返回 head
  for (let i = 1; i < k; i++) {
    tail = tail.next;

    if (!tail) return head;
  }

  // 未避免無窮迴圈將 tail.next 設為空再反轉，需先記錄下個節點開頭
  var next = tail.next;
  tail.next = null;

  // 此時從 head 往後遍歷會停在 tail，因此可以進行反轉
  reverse(head);

  // 反轉後 head 變成最後一個元素，再接續回 next 節點使用遞迴呼叫
  head.next = reverseKGroup(next, k);

  // 返回反轉後的開頭節點 tail
  return tail;
};

// linked-list 反轉
function reverse(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;

    curr = next;
  }
}
