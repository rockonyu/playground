import StackList from "./stack-list";

export class MinStack {
  private stack: StackList = new StackList();
  private minStack: StackList = new StackList();

  public push = (value: number) => {
    this.stack.push(value);

    if (this.minStack.isEmpty() || value <= this.minStack.peek()!) {
      this.minStack.push(value);
    } else {
      this.minStack.push(this.minStack.peek()!);
    }

    return this.stack.peek();
  };

  public pop = () => {
    this.minStack.pop();

    return this.stack.pop();
  };

  public peek = () => {
    return this.stack.peek();
  };

  public peekMin = () => {
    return this.minStack.peek();
  };

  public isEmpty = () => {
    return this.stack.isEmpty();
  };

  public getSize = () => {
    return this.stack.getSize();
  };
}

export default MinStack;
