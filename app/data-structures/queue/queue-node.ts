export class QueueNode<T = number> {
  value: T | null;
  next: QueueNode<T> | null;

  constructor(value?: T, next?: QueueNode<T> | null) {
    this.value = value === undefined ? null : value;
    this.next = next === undefined ? null : next;
  }
}

export default QueueNode;
