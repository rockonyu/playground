import type { Maze, MazeNode } from "./type";

export function generateMaze(n: number): {
  maze: Maze;
  start: MazeNode;
  end: MazeNode;
} {
  const maze: Maze = Array.from({ length: n }, () => Array(n).fill(1));

  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  function isValid(x: number, y: number): boolean {
    return x >= 0 && y >= 0 && x < n && y < n;
  }

  function dfs(x: number, y: number): void {
    maze[x][y] = 0;

    const dirs = [0, 1, 2, 3].sort(() => Math.random() - 0.5);

    for (let i = 0; i < 4; i++) {
      const nx = x + 2 * dx[dirs[i]];
      const ny = y + 2 * dy[dirs[i]];

      if (isValid(nx, ny) && maze[nx][ny] === 1) {
        maze[x + dx[dirs[i]]][y + dy[dirs[i]]] = 0;
        dfs(nx, ny);
      }
    }
  }

  dfs(n - 1, n - 1);
  maze[0][0] = 0;
  maze[0][1] = 0;

  return { maze, start: [0, 0], end: [n - 1, n - 1] };
}

export default generateMaze;
