export class QueueArrayCircular {
  private head: number = 0;
  private tail: number = 0;
  private capacity: number = 5;
  private queue: number[] = [];

  private isFull = () => {
    return (this.tail + 1) % this.capacity === this.head;
  };

  private doubleCapacity = () => {
    const newQueue: number[] = [];

    // 重新排列 queue
    const size = this.getSize();

    // 將 0 預留給 this.head (代表沒東西) 因此從 1 開始排
    for (let i = 1; i <= size; i++) {
      newQueue[i] = this.queue[(this.head + i) % this.capacity];
    }

    this.head = 0;
    this.tail = size;
    this.capacity *= 2;
    this.queue = newQueue;
  };

  public enqueue = (value: number) => {
    if (this.isFull()) {
      this.doubleCapacity();
    }

    this.tail = (this.tail + 1) % this.capacity;

    return (this.queue[this.tail] = value);
  };

  public dequeue = () => {
    if (this.isEmpty()) {
      return null;
    }

    this.head = (this.head + 1) % this.capacity;

    return this.queue[this.head] ?? null;
  };

  public isEmpty = () => {
    return this.head === this.tail;
  };

  public getSize = () => {
    if (this.tail > this.head) {
      return this.tail - this.head;
    }

    return this.capacity - (this.head - this.tail);
  };

  public peek = () => {
    return this.queue[this.head + 1] ?? null;
  };
}

export default QueueArrayCircular;
