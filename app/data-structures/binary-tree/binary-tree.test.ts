import { describe, it, expect } from "vitest";
import BinaryTree from "./binary-tree";
import TreeNode from "./tree-node";

const createBinaryTree = () => {
  // TreeNode instantiation
  const nodeA = new TreeNode(1);
  const nodeB = new TreeNode(2);
  const nodeC = new TreeNode(3);
  const nodeD = new TreeNode(4);
  const nodeE = new TreeNode(5);
  const nodeF = new TreeNode(6);
  const nodeG = new TreeNode(7);
  const nodeH = new TreeNode(8);
  const nodeI = new TreeNode(9);

  // construct the Binary Tree
  nodeA.left = nodeB;
  nodeA.right = nodeC;
  nodeB.left = nodeD;
  nodeB.right = nodeE;
  nodeE.left = nodeG;
  nodeE.right = nodeH;
  nodeC.left = nodeF;
  nodeF.right = nodeI;

  // link parent pointer
  nodeB.parent = nodeA;
  nodeC.parent = nodeA;
  nodeD.parent = nodeB;
  nodeE.parent = nodeB;
  nodeG.parent = nodeE;
  nodeH.parent = nodeE;
  nodeF.parent = nodeC;
  nodeI.parent = nodeF;

  const binaryTree = new BinaryTree(nodeA);

  return binaryTree;
};

describe("測試 BinaryTree 類別", () => {
  it("能夠正確地執行 preorder 函式", () => {
    const binaryTree = createBinaryTree();

    expect(binaryTree.preorder(binaryTree.root)).toEqual([
      1, 2, 4, 5, 7, 8, 3, 6, 9,
    ]);
  });

  it("能夠正確地執行 inorder 函式", () => {
    const binaryTree = createBinaryTree();

    expect(binaryTree.inorder(binaryTree.root)).toEqual([
      4, 2, 7, 5, 8, 1, 6, 9, 3,
    ]);
  });

  it("能夠正確地執行 postorder 函式", () => {
    const binaryTree = createBinaryTree();

    expect(binaryTree.postorder(binaryTree.root)).toEqual([
      4, 7, 8, 5, 2, 9, 6, 3, 1,
    ]);
  });

  it("能夠正確地執行 levelorder 函式", () => {
    const binaryTree = createBinaryTree();

    expect(binaryTree.levelorder()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("能夠正確地執行 preorderIterative 函式", () => {
    const binaryTree = createBinaryTree();

    expect(binaryTree.preorderIterative()).toEqual([1, 2, 4, 5, 7, 8, 3, 6, 9]);
  });

  it("能夠正確地執行 inorderIterative 函式", () => {
    const binaryTree = createBinaryTree();

    expect(binaryTree.inorderIterative()).toEqual([4, 2, 7, 5, 8, 1, 6, 9, 3]);
  });

  it("能夠正確地執行 postorderIterative 函式", () => {
    const binaryTree = createBinaryTree();

    expect(binaryTree.postorderIterative()).toEqual([
      4, 7, 8, 5, 2, 9, 6, 3, 1,
    ]);
  });

  it("能夠正確地執行 inorderByParent 函式", () => {
    const binaryTree = createBinaryTree();

    expect(binaryTree.inorderByParent()).toEqual([4, 2, 7, 5, 8, 1, 6, 9, 3]);
  });

  it("能夠正確地執行 inorderReverse 函式", () => {
    const binaryTree = createBinaryTree();

    expect(binaryTree.inorderReverse()).toEqual([3, 9, 6, 1, 8, 5, 7, 2, 4]);
  });
});
