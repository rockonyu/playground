import StackNode from "./stack-node";

export class StackList<T = number> {
  private head: StackNode<T> | null = null;
  private size: number = 0;

  public push = (value: T) => {
    const node = new StackNode<T>(value);

    node.next = this.head;
    this.head = node;
    this.size++;

    return this.head.value;
  };

  public pop = () => {
    if (this.head === null) {
      return null;
    }

    const current = this.head.value;
    this.head = this.head.next;
    this.size--;

    return current;
  };

  public peek = () => {
    if (this.head === null) {
      return null;
    }

    return this.head.value;
  };

  public isEmpty = () => {
    return this.head === null;
  };

  public getSize = () => {
    return this.size;
  };
}

export default StackList;
