import Component from './component.js';

import './cell.css';

export default class Cell extends Component {
  constructor(root) {
    super(root);
    this.root.addEventListener('click', this.handleClick.bind(this));
  }

  occupy(turn) {
    this.root.textContent = turn;
  }

  isOccupied() {
    return Boolean(this.root.textContent);
  }
  
  isMatch(turn) {
    return this.root.textContent === turn;
  }

  reset() {
    this.root.textContent = '';
  }

  handleClick() {
    this.fire('click');
  }
}