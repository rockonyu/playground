// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Example1:
// Input: root = [1,2,2,3,4,4,3]
// Output: true

const checkIsSymmetric = (node1, node2) => {
  if (node1 === null && node2 === null) {
    return true;
  }

  if (node1 === null || node2 === null) {
    return false;
  }

  return (
    node1.val === node2.val &&
    checkIsSymmetric(node1.left, node2.right) &&
    checkIsSymmetric(node1.right, node2.left)
  );
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Time complexity : O(n)
 * Space complexity : O(n)
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  return checkIsSymmetric(root, root);
};
