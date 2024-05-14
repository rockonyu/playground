import Component from './component.js';
import './card.css';

/**
 * Card 需要擁有的行為：
 * 1. 生成後決定顏色
 * 2. 被點擊後回傳背景顏色
 * 3. 由其他 component 讓其消失 (點錯的情況)
 */
export default class Card extends Component {
  static getRootClass() {
    return '.card';
  }

  constructor(root) {
    super(root);
    root.addEventListener("click", this.handleClick.bind(this));
    this.reset();
  }

  static randomColor() {
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from  0 -255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from  0 -255
    var b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  reset() {
    this.color = Card.randomColor();
    this.fadeIn(this.color);
  }

  fadeOut() {
    this.root.style.opacity = 0;
  }

  fadeIn(color) {
    this.root.style.backgroundColor = color;
    this.root.style.opacity = 1;
  }

  handleClick() {
    this.fire('click');
  }
}