export class StackArray {
  private top: number = -1;
  private stack: number[] = [];

  public push = (value: number) => {
    this.stack[++this.top] = value;

    return this.stack[this.top];
  };

  public pop = () => {
    return this.stack[this.top--] ?? null;
  };

  public peek = () => {
    return this.stack[this.top] ?? null;
  };

  public isEmpty = () => {
    return this.top === -1;
  };

  public getSize = () => {
    return this.top + 1;
  };
}

export default StackArray;
