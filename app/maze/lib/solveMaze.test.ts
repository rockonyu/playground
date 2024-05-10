import solveMaze from "./solveMaze";
import { expect, test } from "vitest";

test("should return null if there is no path", () => {
  const maze = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ];
  const start: [number, number] = [0, 0];
  const end: [number, number] = [2, 2];
  expect(solveMaze(maze, start, end)).toBeNull();
});

test("should return the correct path if there is one", () => {
  const maze = [
    [0, 1, 0],
    [0, 1, 0],
    [0, 0, 0],
  ];
  const start: [number, number] = [0, 0];
  const end: [number, number] = [2, 2];
  const expectedPath = [
    [0, 0],
    [1, 0],
    [2, 0],
    [2, 1],
    [2, 2],
  ];
  expect(solveMaze(maze, start, end)).toEqual(expectedPath);
});
