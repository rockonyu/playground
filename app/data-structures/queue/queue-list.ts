import QueueNode from "./queue-node";

export class QueueList<T = number> {
  private head: QueueNode<T> | null = null;
  private tail: QueueNode<T> | null = null;
  private size: number = 0;

  public enqueue = (value: T) => {
    const node = new QueueNode<T>(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
      this.size++;

      return node.value;
    }

    this.tail!.next = node;
    this.tail = node;
    this.size++;

    return node.value;
  };

  public dequeue = () => {
    if (this.isEmpty()) {
      return null;
    }

    const current = this.head!;

    this.head = this.head!.next;
    this.size--;

    return current.value;
  };

  public peek = () => {
    return this.head?.value ?? null;
  };

  public isEmpty = () => {
    return this.size === 0;
  };

  public getSize = () => {
    return this.size;
  };
}

export default QueueList;
