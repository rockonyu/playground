/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Time complexity : O(n)
 * Space complexity : O(n)
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversal(root) {
  const result = [];

  if (root) {
    result.push(...inorderTraversal(root.left));

    result.push(root.val);

    result.push(...inorderTraversal(root.right));
  }

  return result;
}

function inorderTraversalIteratively(root) {
  const result = [];

  const stack = [];
  let current = root;

  while (current || stack.length > 0) {
    if (current) {
      stack.push(current);
      current = current.left;
      continue;
    }

    current = stack.pop();
    result.push(current.val);

    current = current.right;
  }

  return result;
}
