import TreeNode from "./tree-node";

export const preorderRecursive = function (root: TreeNode | null): number[] {
  const result: number[] = [];

  if (root) {
    result.push(root.val);

    result.push(...preorderRecursive(root.left));

    result.push(...preorderRecursive(root.right));
  }

  return result;
};

export const preorderIterative = function (root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const stack: TreeNode[] = [root];

  const result: number[] = [];

  while (stack.length > 0) {
    const node = stack.pop()!;

    result.push(node.val);

    if (node.right) {
      stack.push(node.right);
    }

    if (node.left) {
      stack.push(node.left);
    }
  }

  return result;
};
