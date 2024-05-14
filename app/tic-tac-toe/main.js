import Component from './component.js';
import Reset from './reset.js';
import Grid from './grid.js';
import Banner from './banner.js';

import './main.css';

export default class Main extends Component {
  constructor(root) {
    super(root);
    this.player = 'O';

    this.reset = new Reset(root.querySelector(Reset.getRootClass()));
    this.reset.on('restart', this.restart.bind(this));
    this.reset.reset();

    this.grid = new Grid(root.querySelector(Grid.getRootClass()));
    this.grid.on('switch', this.switch.bind(this));
    this.grid.on('win', this.win.bind(this));
    this.grid.on('draw', this.draw.bind(this));
    this.grid.reset(this.player);

    this.banner = new Banner(root.querySelector(Banner.getRootClass()));
    this.banner.reset(this.player);
  }

  restart() {
    this.player = 'O';
    this.grid.reset(this.player);
    this.banner.reset(this.player);
  }

  switch() {
    this.player = this.player === 'O' ? 'X' : 'O';
    this.banner.turn.setTurn(this.player);
    this.grid.setTurn(this.player);
  }

  win(elem, player) {
    this.banner.addScore(player);
    this.resetBoard();
  }

  draw() {
    this.resetBoard();
  }

  resetBoard() {
    this.player = 'O';
    this.grid.reset(this.player);
    this.banner.turn.setTurn(this.player);
  }
}

window.onload = function () {
  const body = document.querySelector('body');
  new Main(body);
}