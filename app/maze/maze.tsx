"use client";

import React, { useEffect, useRef, useState } from "react";
import cloneDeep from "lodash/cloneDeep";
import generateMaze from "./lib/generateMaze";
import solveMazeByStep from "./lib/solveMazeByStep";
import type { MazeNode } from "./lib/type";

enum MazeCellType {
  Path = 0,
  Wall = 1,
  Visited = 2,
  Answer = 3,
}

const mazeCellColorMap = new Map([
  [MazeCellType.Path, "white"],
  [MazeCellType.Wall, "black"],
  [MazeCellType.Visited, "blue"],
  [MazeCellType.Answer, "red"],
]);

const INTERVAL_TIME = 100;
const MAZE_SIZE = 21;

const MazeCell: React.FC<{ value: MazeCellType }> = ({ value }) => {
  const bgColor = mazeCellColorMap.get(value);

  return (
    <div style={{ backgroundColor: bgColor, width: "20px", height: "20px" }} />
  );
};

const Maze: React.FC = () => {
  const solveMazeRef =
    useRef<Generator<MazeNode, MazeNode[] | null, unknown>>();

  const [maze, setMaze] = useState<number[][]>([[]]);

  const init = () => {
    const { maze, start, end } = generateMaze(MAZE_SIZE);

    solveMazeRef.current = solveMazeByStep(maze, start, end);

    setMaze(maze);
  };

  const [auto, setAuto] = useState(false);

  const nextStep = () => {
    if (!solveMazeRef.current) {
      return;
    }

    const { value, done } = solveMazeRef.current.next();

    if (done) {
      solveMazeRef.current = undefined;
      setAuto(false);

      setMaze((prev) => {
        const current = cloneDeep(prev);

        for (let node of value ?? []) {
          current[node[0]][node[1]] = MazeCellType.Answer;
        }

        return current;
      });

      return;
    }

    const [x, y] = value;

    setMaze((prev) => {
      const current = cloneDeep(prev);
      current[x][y] = MazeCellType.Visited;

      return current;
    });
  };

  useEffect(init, []);

  useEffect(() => {
    if (!auto) {
      return;
    }

    const interval = setInterval(nextStep, INTERVAL_TIME);

    return () => {
      clearInterval(interval);
    };
  }, [auto]);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${maze[0].length}, 20px)`,
        }}
      >
        {maze.map((rows, x) =>
          rows.map((cell, y) => <MazeCell key={`${x}-${y}`} value={cell} />)
        )}
      </div>
      <button onClick={nextStep}>Next</button>
      {auto ? (
        <button onClick={() => setAuto(false)}>Stop</button>
      ) : (
        <button onClick={() => setAuto(true)}>Start</button>
      )}
      &nbsp;
      <button onClick={init}>New Maze</button>
    </>
  );
};

export default Maze;
