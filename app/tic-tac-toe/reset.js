import Component from './component.js';

export default class Reset extends Component {
  static getRootClass() {
    return '.reset';
  }

  constructor(root) {
    super(root);
    this.root.addEventListener('click', this.handleClick.bind(this));
  }

  reset() {
    this.root.style.backgroundColor = 'red';
  }

  handleClick() {
    this.fire('restart');
  }
}