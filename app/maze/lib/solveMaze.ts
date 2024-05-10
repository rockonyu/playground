import type { Maze, MazeNode } from "./type";

export function solveMaze(
  maze: Maze,
  start: MazeNode,
  end: MazeNode
): MazeNode[] | null {
  // 目前 node 與連接 path 的堆疊
  const stack: [[MazeNode, MazeNode[]]] = [[start, [start]]];
  // 是否走過
  const visited = maze.map((rows) => rows.map(() => false));
  // 上下左右
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (stack.length > 0) {
    const [node, paths] = stack.pop()!;

    if (node[0] === end[0] && node[1] === end[1]) {
      // 找到終點，回傳對應的路徑
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
        visited[x][y] === false &&
        maze[x][y] === 0
      ) {
        stack.push([
          [x, y],
          [...paths, [x, y]],
        ]);
      }
    }
  }

  return null;
}

export default solveMaze;
