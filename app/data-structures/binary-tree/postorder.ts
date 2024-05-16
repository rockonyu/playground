import TreeNode from "./tree-node";

export const postorderRecursive = function (root: TreeNode | null): number[] {
  const result: number[] = [];

  if (root) {
    result.push(...postorderRecursive(root.left));

    result.push(...postorderRecursive(root.right));

    result.push(root.val);
  }

  return result;
};

export const postorderIterative = function (root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const result: number[] = [];

  const stack: TreeNode[] = [root];

  while (stack.length > 0) {
    const node = stack[stack.length - 1];

    if (!node.left && !node.right) {
      stack.pop();
      result.push(node.val);
    }

    if (node.right) {
      stack.push(node.right);
      node.right = null;
    }

    if (node.left) {
      stack.push(node.left);
      node.left = null;
    }
  }

  return result;
};
