import { levelorderIterative, levelorderRecursive } from "./levelorder";
import { it, expect } from "vitest";
import { createTreeNode } from "./helpers";

it("使用 inorderRecursive 遍歷 treeNode", () => {
  // arrange
  const root = createTreeNode();

  // act
  const result = levelorderRecursive(root);

  // assert
  expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

it("使用 inorderIterative 遍歷 treeNode", () => {
  // arrange
  const root = createTreeNode();

  // act
  const result = levelorderIterative(root);

  // assert
  expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
