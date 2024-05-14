import Component from './component.js';

export default class Role extends Component {
  static getRootClass() {
    return '.role';
  }

  constructor(root) {
    super(root);

    this.scoreDisplay = root.querySelector('.score');
    this.reset();
  }

  reset() {
    this.score = 0;
    this.scoreDisplay.textContent = '-';
  }

  addScore() {
    this.score++;
    this.scoreDisplay.textContent = this.score;
  }
}