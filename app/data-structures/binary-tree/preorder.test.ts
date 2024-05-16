import { preorderIterative, preorderRecursive } from "./preorder";
import { it, expect } from "vitest";
import { createTreeNode } from "./helpers";

it("使用 preorderRecursive 遍歷 treeNode", () => {
  // arrange
  const root = createTreeNode();

  // act
  const result = preorderRecursive(root);

  // assert
  expect(result).toEqual([1, 2, 4, 5, 7, 8, 3, 6, 9]);
});

it("使用 preorderIterative 遍歷 treeNode", () => {
  // arrange
  const root = createTreeNode();

  // act
  const result = preorderIterative(root);

  // assert
  expect(result).toEqual([1, 2, 4, 5, 7, 8, 3, 6, 9]);
});
