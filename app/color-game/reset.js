import Component from './component.js';

import './reset.css';
/*
 * [Event name: params]
 * click: this
 */
export default class Reset extends Component {
  static getRootClass() {
    return '.reset';
  }

  constructor(root) {
    super(root);
    root.addEventListener("click", this.handleClick.bind(this));
  }

  reset() {
    this.root.textContent = 'New Color';
  }

  end() {
    this.root.textContent = "Play Again";
  }

  handleClick(e) {
    this.fire('click');
  }
}
