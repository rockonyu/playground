import Component from './component.js';
import Cell from './cell.js';

import './grid.css';
export default class Grid extends Component {
  static getRootClass() {
    return '.grid';
  }

  constructor(root) {
    super(root);

    this.cells = [];
    const els = root.querySelectorAll('.cell');
    els.forEach((el) => {
      const cell = new Cell(el);
      cell.on('click', this.handleCellClick.bind(this));
      this.cells.push(cell);
    });

    this.gameOver = false;
    this.winCondition = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  }

  reset(x) {
    this.gameOver = false;
    this.cells.forEach((cell) => cell.reset());
    this.setTurn(x);
  }

  setTurn(x) {
    this.turn = x;
  }

  judge() {
    for (let i = 0; i < this.winCondition.length; i++) {
      const [a, b, c] = this.winCondition[i];
      if (this.cells[a].isMatch(this.turn) &&
        this.cells[b].isMatch(this.turn) &&
        this.cells[c].isMatch(this.turn)) {
        this.gameOver = true;
        this.fire('win', this.turn);
        return;
      }
    }

    if (this.checkAllOccupied()) {
      this.gameOver = true;
      this.fire('draw');
    } else if (!this.gameOver) {
      this.fire('switch');
    }
  }

  checkAllOccupied() {
    // Note: There is no way to stop or break a forEach() loop other than by throwing an exception.
    // 所以改用 let...of
    for (let cell of this.cells) {
      if (!cell.isOccupied()) return false;
    }
    return true;
  }

  handleCellClick(cell) {
    if (this.gameOver || cell.isOccupied()) return;

    cell.occupy(this.turn);
    this.judge();
  }
}