// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 思路使用 0021 merge-two-sorted-lists 解法，改成支援多個 linked-list 版本
 *
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length === 0) {
    return null;
  }

  const target = lists.reduce((prev, curr) => {
    if (prev && prev.val === null) {
      return curr;
    }

    const dummy = new ListNode(null);
    let node = dummy;

    while (prev !== null && curr !== null) {
      if (prev.val < curr.val) {
        node.next = new ListNode(prev.val);
        prev = prev.next;
      } else {
        node.next = new ListNode(curr.val);
        curr = curr.next;
      }

      node = node.next;
    }

    node.next = prev || curr;

    return dummy.next;
  }, new ListNode(null));

  return target;
};
