import { describe, it, expect } from "vitest";
import BinaryTree from "./binary-tree";
import TreeNode from "../tree-node";

const createBinaryTree = () => {
  // TreeNode instantiation
  const nodeA = new TreeNode("A");
  const nodeB = new TreeNode("B");
  const nodeC = new TreeNode("C");
  const nodeD = new TreeNode("D");
  const nodeE = new TreeNode("E");
  const nodeF = new TreeNode("F");
  const nodeG = new TreeNode("G");
  const nodeH = new TreeNode("H");
  const nodeI = new TreeNode("I");

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

    expect(binaryTree.preorder(binaryTree.root)).toBe("A B D E G H C F I ");
  });

  it("能夠正確地執行 inorder 函式", () => {
    const binaryTree = createBinaryTree();

    expect(binaryTree.inorder(binaryTree.root)).toBe("D B G E H A F I C ");
  });

  it("能夠正確地執行 postorder 函式", () => {
    const binaryTree = createBinaryTree();

    expect(binaryTree.postorder(binaryTree.root)).toBe("D G H E B I F C A ");
  });

  it("能夠正確地執行 levelorder 函式", () => {
    const binaryTree = createBinaryTree();

    expect(binaryTree.levelorder()).toBe("A B C D E F G H I ");
  });

  it("能夠正確地執行 preorderIterative 函式", () => {
    const binaryTree = createBinaryTree();

    expect(binaryTree.preorderIterative()).toBe("A B D E G H C F I ");
  });

  it("能夠正確地執行 inorderIterative 函式", () => {
    const binaryTree = createBinaryTree();

    expect(binaryTree.inorderIterative()).toBe("D B G E H A F I C ");
  });

  it("能夠正確地執行 postorderIterative 函式", () => {
    const binaryTree = createBinaryTree();

    expect(binaryTree.postorderIterative()).toBe("D G H E B I F C A ");
  });

  it("能夠正確地執行 inorderByParent 函式", () => {
    const binaryTree = createBinaryTree();

    expect(binaryTree.inorderByParent()).toBe("D B G E H A F I C ");
  });

  it("能夠正確地執行 inorderReverse 函式", () => {
    const binaryTree = createBinaryTree();

    expect(binaryTree.inorderReverse()).toBe("C I F A H E G B D ");
  });
});
