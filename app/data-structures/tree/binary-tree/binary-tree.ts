import TreeNode from "../tree-node";
import Queue from "../../queue";
import Stack from "../../stack";

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
    let result = "";

    if (current) {
      result += `${current.value} `; // V
      result += this.preorder(current.left); // L
      result += this.preorder(current.right); // R
    }

    return result;
  }

  public inorder(current: TreeNode | null) {
    let result = "";

    if (current) {
      result += this.inorder(current.left); // L
      result += `${current.value} `; // V
      result += this.inorder(current.right); // R
    }

    return result;
  }

  public postorder(current: TreeNode | null) {
    let result = "";

    if (current) {
      result += this.postorder(current.left); // L
      result += this.postorder(current.right); // R
      result += `${current.value} `; // V
    }

    return result;
  }

  public levelorder() {
    let result = "";

    const queue = new Queue<TreeNode>();
    queue.enqueue(this.root);

    while (!queue.isEmpty()) {
      const current = queue.dequeue()!;

      result += `${current.value} `;

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
    let result = "";

    const stack = new Stack<TreeNode>();
    stack.push(this.root);

    while (!stack.isEmpty()) {
      const current = stack.pop();

      if (current) {
        result += `${current.value} `;

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
    let result = "";
    let current: TreeNode | null = this.root;

    const stack = new Stack<TreeNode>();

    while (current || !stack.isEmpty()) {
      if (current) {
        stack.push(current);
        current = current.left;
        continue;
      }

      current = stack.pop()!;
      result += `${current.value} `;
      current = current.right;
    }

    return result;
  }

  public postorderIterative() {
    let result = "";

    const stack = new Stack<TreeNode>();
    stack.push(this.root);

    const output = new Stack<string>();

    while (!stack.isEmpty()) {
      const current = stack.pop()!;

      output.push(current.value);

      if (current.left) {
        stack.push(current.left);
      }

      if (current.right) {
        stack.push(current.right);
      }
    }

    while (!output.isEmpty()) {
      result += `${output.pop()} `;
    }

    return result;
  }

  public inorderByParent() {
    let result = "";
    let current = this.leftmost(this.root);

    while (current) {
      result += `${current.value} `;
      current = this.inorderSuccessor(current)!;
    }

    return result;
  }

  public inorderReverse() {
    let result = "";
    let current = this.rightmost(this.root);

    while (current) {
      result += `${current.value} `;
      current = this.inorderPredecessor(current)!;
    }

    return result;
  }

  constructor(node: TreeNode) {
    this.root = node;
  }
}

export default BinaryTree;
