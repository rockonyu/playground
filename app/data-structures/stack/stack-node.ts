export class StackNode<T = number> {
  value: T | null;
  next: StackNode<T> | null;

  constructor(value?: T, next?: StackNode<T> | null) {
    this.value = value === undefined ? null : value;
    this.next = next === undefined ? null : next;
  }
}

export default StackNode;
