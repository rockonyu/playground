import { describe, it, expect } from "vitest";
import LinkedList from "./linked-list";

describe("測試 shift 函式", () => {
  it("能夠透過 shift 從 head 輸入新資料", () => {
    const linkedList = new LinkedList();

    linkedList.shift(1);
    linkedList.shift(2);
    linkedList.shift(3);

    expect(linkedList.printList()).toBe("3 2 1 ");
  });
});

describe("測試 push 函式", () => {
  it("能夠透過 push 從 tail 輸入新資料", () => {
    const linkedList = new LinkedList();

    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);

    expect(linkedList.printList()).toBe("1 2 3 ");
  });
});

describe("測試 delete 函式", () => {
  it("刪除存在的節點", () => {
    const linkedList = new LinkedList();

    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(2);
    linkedList.push(3);

    linkedList.delete(2);

    expect(linkedList.printList()).toBe("1 3 ");
  });

  it("刪除不存在的節點", () => {
    const linkedList = new LinkedList();

    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);

    linkedList.delete(4);

    expect(linkedList.printList()).toBe("1 2 3 ");
  });

  it("刪除節點在第一個位置", () => {
    const linkedList = new LinkedList();

    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);

    linkedList.delete(1);

    expect(linkedList.printList()).toBe("2 3 ");
  });

  it("刪除節點在第一個位置，且只有一筆資料", () => {
    const linkedList = new LinkedList();

    linkedList.push(1);

    linkedList.delete(1);

    expect(linkedList.printList()).toBe("");
  });

  it("列表內沒有資料", () => {
    const linkedList = new LinkedList();

    linkedList.delete(2);

    expect(linkedList.printList()).toBe("");
  });
});

describe("測試 clear 函式", () => {
  it("清空 linked list", () => {
    const linkedList = new LinkedList();

    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);

    linkedList.clear();

    expect(linkedList.printList()).toBe("");
  });
});

describe("測試 reverse 函式", () => {
  it("反轉 linked list", () => {
    const linkedList = new LinkedList();

    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);

    linkedList.reverse();

    expect(linkedList.printList()).toBe("3 2 1 ");
  });
});
