import Component from './component.js';
import Card from './card.js';

import './deck.css';

export default class Deck extends Component {
  static getRootClass() {
    return '.deck';
  }

  constructor(root) {
    super(root);
  }

  reset(mode = 'hard') {
    const count = mode === 'easy' ? 3 : 6;
    this.cards = [];
    this.isEnd = false;
    this.root.innerHTML = '';
    for (let i = 0; i < count; i++) {
      const li = document.createElement('li');
      li.setAttribute('class', 'card');
      this.root.appendChild(li);
      const card = new Card(li);
      card.on('click', this.handleCardClick.bind(this));
      this.cards.push(card);
    }
    this.pickedColor = this.pickColor();
  }

  handleCardClick(card) {
    if (this.isEnd) return;

    if (card.color === this.pickedColor) {
      for (let card of this.cards) {
        card.fadeIn("#FFF");
      }
      this.isEnd = true;
      this.fire('correct', card.color);
    } else {
      card.fadeOut();
      this.fire('wrong');
    }
  }

  timeout() {
    for (let card of this.cards) {
      card.fadeIn("#FFF");
    }
    this.isEnd = true;
  }

  pickColor() {
    return this.cards[Math.floor(Math.random() * this.cards.length)].color;
  }
}