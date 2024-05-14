import Component from './component.js';
import Role from './role.js';
import Turn from './turn.js';

export default class Banner extends Component {
  static getRootClass() {
    return '.banner';
  }

  constructor(root) {
    super(root);

    this.roles = {};
    const els = root.querySelectorAll(Role.getRootClass());
    this.roles['O'] = new Role(els[0]);
    this.roles['X'] = new Role(els[1]);

    this.turn = new Turn(root.querySelector(Turn.getRootClass()));
  }

  reset(x) {
    this.roles['O'].reset();
    this.roles['X'].reset();
    this.turn.setTurn(x);
  }

  addScore(x) {
    this.roles[x].addScore();
  }
}