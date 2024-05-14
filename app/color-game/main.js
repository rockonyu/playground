import Component from './component.js';
import Reset from './reset.js';
import Deck from './deck.js';
import Board from './board.js';
import Navbar from './navbar.js';

import './main.css';

export default class Main extends Component {
  static getRootClass() {
    return '.main';
  }

  constructor(root) {
    super(root);
    
    this.mode = 'hard';
    this.navbar = new Navbar(root.querySelector('.navbar'));
    this.navbar.reset(this.mode);
    this.navbar.on('adjust', this.handleAdjustClick.bind(this));

    this.deck = new Deck(root.querySelector('.deck'));
    this.deck.reset(this.mode);
    this.deck.on('correct', this.handleRightClick.bind(this));
    this.deck.on('wrong', this.handleWrongClick.bind(this));

    this.reset = new Reset(root.querySelector('.reset'));
    this.reset.reset();
    this.reset.on('click', this.handleResetClick.bind(this));

    this.board = new Board(root.querySelector('.board'));
    this.board.reset(this.deck.pickedColor, this.mode);
    this.board.on('restart', this.handleResetClick.bind(this));
    this.board.on('timeout', this.handleTimeout.bind(this));    
  }

  handleRightClick(target, color) {
    this.root.style.backgroundColor = color;
    this.board.correct();
    this.reset.end();
  }

  handleWrongClick(target) {
    this.board.error();
  }

  handleResetClick(target, ...args) {
    this.root.style.backgroundColor = "#232323";
    this.deck.reset(this.mode);
    this.board.reset(this.deck.pickedColor, this.mode);
    this.reset.reset();
  }

  handleAdjustClick(target, mode) {
    this.mode = mode;
    this.handleResetClick.call(this);
  }

  handleTimeout(target) {
    this.root.style.backgroundColor = this.deck.pickedColor;
    this.deck.timeout();
    this.board.timeout();
    this.reset.end();
  }
}

window.onload = function () {
  const body = document.querySelector('body');
  new Main(body);
};