export class QueueArraySequential<T = number> {
  private head: number = -1;
  private tail: number = -1;
  private queue: T[] = [];

  public enqueue = (value: T) => {
    return (this.queue[++this.tail] = value);
  };

  public dequeue = () => {
    return this.queue[++this.head] ?? null;
  };

  public peek = () => {
    return this.queue[this.head + 1] ?? null;
  };

  public isEmpty = () => {
    return this.head === this.tail;
  };

  public getSize = () => {
    return this.tail - this.head;
  };
}

export default QueueArraySequential;
