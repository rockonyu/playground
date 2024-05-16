import TreeNode from "./tree-node";

export const levelorderRecursive = function (root: TreeNode | null): number[] {
  const result: number[][] = [];

  const traverse = (node: TreeNode | null, level: number) => {
    if (node) {
      if (result[level] == null) {
        result[level] = [];
      }

      result[level].push(node.val);

      traverse(node.left, level + 1);
      traverse(node.right, level + 1);
    }
  };

  traverse(root, 0);

  return result.flatMap((x) => x);
};

export const levelorderIterative = function (root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const result: number[] = [];

  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const current = queue.shift()!;

    result.push(current.val);

    if (current.left != null) {
      queue.push(current.left);
    }

    if (current.right != null) {
      queue.push(current.right);
    }
  }

  return result;
};
