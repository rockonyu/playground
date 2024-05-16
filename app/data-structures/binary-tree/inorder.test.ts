import { inorderIterative, inorderRecursive } from "./inorder";
import { it, expect } from "vitest";
import { createTreeNode } from "./helpers";

it("使用 inorderRecursive 遍歷 treeNode", () => {
  // arrange
  const root = createTreeNode();

  // act
  const result = inorderRecursive(root);

  // assert
  expect(result).toEqual([4, 2, 7, 5, 8, 1, 6, 9, 3]);
});

it("使用 inorderIterative 遍歷 treeNode", () => {
  // arrange
  const root = createTreeNode();

  // act
  const result = inorderIterative(root);

  // assert
  expect(result).toEqual([4, 2, 7, 5, 8, 1, 6, 9, 3]);
});
