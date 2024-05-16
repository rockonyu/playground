import { postorderIterative, postorderRecursive } from "./postorder";
import { it, expect } from "vitest";
import { createTreeNode } from "./helpers";

it("使用 postorderRecursive 遍歷 treeNode", () => {
  // arrange
  const root = createTreeNode();

  // act
  const result = postorderRecursive(root);

  // assert
  expect(result).toEqual([4, 7, 8, 5, 2, 9, 6, 3, 1]);
});

it("使用 postorderIterative 遍歷 treeNode", () => {
  // arrange
  const root = createTreeNode();

  // act
  const result = postorderIterative(root);

  // assert
  expect(result).toEqual([4, 7, 8, 5, 2, 9, 6, 3, 1]);
});
