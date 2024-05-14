import { ListNode } from "./list-node";

export class LinkedList {
  private head: ListNode | null = null;

  public printList() {
    if (this.head === null) {
      return "";
    }

    let output = "";
    let current: ListNode | null = this.head;

    while (current) {
      output += `${current.value} `;
      current = current.next;
    }

    return output;
  }

  public shift = (value: number) => {
    const node = new ListNode(value);

    node.next = this.head;
    this.head = node;
  };

  public push = (value: number) => {
    const node = new ListNode(value);
    let current = this.head;

    if (current === null) {
      this.head = node;
      return;
    }

    while (current.next) {
      current = current.next;
    }

    current.next = node;
  };

  public delete = (value: number) => {
    if (this.head === null) {
      return;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let preceding = this.head.next;

    while (preceding) {
      if (preceding.value === value) {
        preceding = preceding.next;
        current.next = preceding;
        continue;
      }

      current = preceding;
      preceding = preceding.next;
    }
  };

  public clear = () => {
    this.head = null;
  };

  public reverse = () => {
    if (this.head === null || this.head.next === null) {
      // 最多只有一個 node，不需要反轉
      return;
    }

    let previous: ListNode | null = null;
    let current: ListNode | null = this.head;
    let preceding: ListNode | null = this.head.next;

    while (preceding) {
      current.next = previous;
      previous = current;
      current = preceding;
      preceding = preceding.next;
    }

    // 此時 current 是最後一個 node：
    // null <- 1 <- 2       3   ->  null
    //          previous  current  preceding
    //
    // 因此將 current 的 next 指向 previous，即可完成反轉
    current.next = previous;

    this.head = current;
  };
}

export default LinkedList;
