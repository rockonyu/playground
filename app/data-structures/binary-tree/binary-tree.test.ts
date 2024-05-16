import { describe, it, expect } from "vitest";
import { createBinaryTree } from "./helpers";

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
