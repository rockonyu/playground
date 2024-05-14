import Component from './component.js';

import './board.css';

export default class Board extends Component {
  static getRootClass() {
    return '.board';
  }

  constructor(root) {
    super(root);
    this.colorDisplay = root.querySelector('.color-picked');
    this.messageDisplay = root.querySelector('.message');
    this.countdownDisplay = root.querySelector('.countdown');
    this.countdownId = null;
  }

  reset(color, mode) {
    clearTimeout(this.countdownId);
    this.colorDisplay.textContent = color.toUpperCase();
    this.messageDisplay.textContent = 'WHAT\'S THE COLOR?';
    this.countdownDisplay.textContent = '';
    
    if(mode === 'nightmare') this.countdown(5);
  }

  correct(){
    this.messageDisplay.textContent = "Correct!";
    this.countdown(5, true);
  }

  error() {
    this.messageDisplay.textContent = "Try Again";
  }

  timeout() {
    this.messageDisplay.textContent = "TIMEOUT!";
    this.countdown(5, true);
  }

  countdown(remained, restart) {
    clearTimeout(this.countdownId);
    let count = parseInt(remained);
    if (count > 0) {
      this.countdownDisplay.textContent = count;
      this.countdownId = setTimeout(() => {
        this.countdown(--count, restart);
      }, 1000);
    } else if (!restart) {
      this.fire('timeout');
    } else {
      this.fire('restart');
    }
  }
}