import TreeNode from "./tree-node";

export const inorderRecursive = function (root: TreeNode | null): number[] {
  const result: number[] = [];

  if (root) {
    result.push(...inorderRecursive(root.left));

    result.push(root.val);

    result.push(...inorderRecursive(root.right));
  }

  return result;
};

export const inorderIterative = function (root: TreeNode | null): number[] {
  const result: number[] = [];

  const stack: TreeNode[] = [];

  let current = root;

  while (stack.length > 0 || current) {
    if (current) {
      stack.push(current);
      current = current.left;
      continue;
    }

    const node = stack.pop()!;

    result.push(node.val);

    if (node.right) {
      current = node.right;
    }
  }

  return result;
};
