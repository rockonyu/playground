import Component from './component.js';

import './navbar.css';

export default class Navbar extends Component {
  static getRootClass() {
    return '.navbar';
  }

  constructor(root) {
    super(root);
    this.modes = this.root.querySelectorAll('[data-mode]');
    this.modes.forEach((item) => {
      item.addEventListener('click', this.adjustDifficulty.bind(this, item))
    });
  }

  reset(difficulty) {
    const current = this.root.querySelector('[data-mode=' + difficulty +']');
    current.classList.add('selected');
  }

  adjustDifficulty(item) {
    const mode = item.dataset.mode;
    this.modes.forEach((item) => item.classList.remove('selected'));
    this.reset(mode);
    this.fire('adjust', mode);
  }
}