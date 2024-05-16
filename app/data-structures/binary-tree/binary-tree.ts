import TreeNode from "./tree-node";
import Queue from "../queue";
import Stack from "../stack";

export class BinaryTree {
  root: TreeNode;

  private leftmost(node: TreeNode) {
    let current = node;

    while (current.left) {
      current = current.left;
    }

    return current;
  }

  private rightmost(node: TreeNode) {
    let current = node;

    while (current.right) {
      current = current.right;
    }

    return current;
  }

  private inorderSuccessor(node: TreeNode) {
    let current = node;

    if (current.right) {
      return this.leftmost(current.right);
    }

    let successor = current.parent;

    while (successor && current === successor.right) {
      current = successor;
      successor = successor.parent;
    }

    return successor;
  }

  private inorderPredecessor(node: TreeNode) {
    let current = node;

    if (current.left) {
      return this.rightmost(current.left);
    }

    let predecessor = current.parent;

    while (predecessor && current === predecessor.left) {
      current = predecessor;
      predecessor = predecessor.parent;
    }

    return predecessor;
  }

  public preorder(current: TreeNode | null) {
    const result: number[] = [];

    if (current) {
      result.push(current.val); // V
      result.push(...this.preorder(current.left)); // L
      result.push(...this.preorder(current.right)); // R
    }

    return result;
  }

  public inorder(current: TreeNode | null) {
    const result: number[] = [];

    if (current) {
      result.push(...this.inorder(current.left)); // L
      result.push(current.val); // V
      result.push(...this.inorder(current.right)); // R
    }

    return result;
  }

  public postorder(current: TreeNode | null) {
    const result: number[] = [];

    if (current) {
      result.push(...this.postorder(current.left)); // L
      result.push(...this.postorder(current.right)); // R
      result.push(current.val); // V
    }

    return result;
  }

  public levelorder() {
    const result: number[] = [];

    const queue = new Queue<TreeNode>();
    queue.enqueue(this.root);

    while (!queue.isEmpty()) {
      const current = queue.dequeue()!;

      result.push(current.val);

      if (current.left != null) {
        queue.enqueue(current.left);
      }

      if (current.right != null) {
        queue.enqueue(current.right);
      }
    }

    return result;
  }

  public preorderIterative() {
    const result: number[] = [];

    const stack = new Stack<TreeNode>();
    stack.push(this.root);

    while (!stack.isEmpty()) {
      const current = stack.pop();

      if (current) {
        result.push(current.val);

        if (current.right) {
          stack.push(current.right);
        }

        if (current.left) {
          stack.push(current.left);
        }
      }
    }

    return result;
  }

  public inorderIterative() {
    const result: number[] = [];
    let current: TreeNode | null = this.root;

    const stack = new Stack<TreeNode>();

    while (current || !stack.isEmpty()) {
      if (current) {
        stack.push(current);
        current = current.left;
        continue;
      }

      current = stack.pop()!;
      result.push(current.val);
      current = current.right;
    }

    return result;
  }

  public postorderIterative() {
    const result: number[] = [];

    const stack = new Stack<TreeNode>();
    stack.push(this.root);

    const output = new Stack<number>();

    while (!stack.isEmpty()) {
      const current = stack.pop()!;

      output.push(current.val);

      if (current.left) {
        stack.push(current.left);
      }

      if (current.right) {
        stack.push(current.right);
      }
    }

    while (!output.isEmpty()) {
      result.push(output.pop()!);
    }

    return result;
  }

  public inorderByParent() {
    const result: number[] = [];
    let current = this.leftmost(this.root);

    while (current) {
      result.push(current.val);
      current = this.inorderSuccessor(current)!;
    }

    return result;
  }

  public inorderReverse() {
    const result: number[] = [];
    let current = this.rightmost(this.root);

    while (current) {
      result.push(current.val);
      current = this.inorderPredecessor(current)!;
    }

    return result;
  }

  constructor(node: TreeNode) {
    this.root = node;
  }
}

export default BinaryTree;
