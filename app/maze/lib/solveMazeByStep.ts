import type { Maze, MazeNode } from "./type";

export function* solveMazeByStep(
  maze: Maze,
  start: MazeNode,
  end: MazeNode
): Generator<MazeNode, MazeNode[] | null, unknown> {
  const stack: [[MazeNode, MazeNode[]]] = [[start, [start]]];
  const visited = maze.map((rows) => rows.map(() => false));
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (stack.length > 0) {
    const [node, paths] = stack.pop()!;

    if (node[0] === end[0] && node[1] === end[1]) {
      return paths;
    }

    visited[node[0]][node[1]] = true;

    for (const [dx, dy] of directions) {
      const [x, y] = [node[0] + dx, node[1] + dy];

      if (
        x >= 0 &&
        x < maze.length &&
        y >= 0 &&
        y < maze[0].length &&
        !visited[x][y] &&
        maze[x][y] === 0
      ) {
        stack.push([
          [x, y],
          [...paths, [x, y]],
        ]);
      }
    }

    yield node;
  }

  return null;
}

export default solveMazeByStep;
