export class TreeNode {
  value: string;
  left: TreeNode | null;
  right: TreeNode | null;
  parent?: TreeNode | null;

  constructor(value: string, left?: TreeNode | null, right?: TreeNode | null) {
    this.value = value;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export default TreeNode;
