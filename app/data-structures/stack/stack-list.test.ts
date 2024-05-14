import { describe, it, expect } from "vitest";
import StackList from "./stack-list";

describe("測試 push 函式", () => {
  it("將資料放入堆疊", () => {
    const stackList = new StackList();

    expect(stackList.push(1)).toBe(1);
    expect(stackList.push(2)).toBe(2);
  });
});

describe("測試 pop 函式", () => {
  it("從堆疊取出資料", () => {
    const stackList = new StackList();

    stackList.push(1);
    stackList.push(2);

    expect(stackList.pop()).toBe(2);
    expect(stackList.pop()).toBe(1);
    expect(stackList.pop()).toBe(null);
  });

  it("沒資料的情境", () => {
    const stackArray = new StackList();

    expect(stackArray.pop()).toBe(null);
  });
});

describe("測試 peek 函式", () => {
  it("未放入任何資料", () => {
    const stackList = new StackList();

    expect(stackList.peek()).toBe(null);
  });

  it("經過 push 後取得頂端的資料", () => {
    const stackList = new StackList();

    stackList.push(1);
    stackList.push(2);

    expect(stackList.peek()).toBe(2);
  });

  it("經過 pop 後取得頂端的資料", () => {
    const stackList = new StackList();

    stackList.push(3);
    stackList.push(4);
    stackList.pop();

    expect(stackList.peek()).toBe(3);
  });

  it("不會移除頂端的資料", () => {
    const stackList = new StackList();

    stackList.push(3);
    stackList.push(4);
    stackList.peek();

    expect(stackList.peek()).toBe(4);
  });
});

describe("測試 isEmpty 函式", () => {
  it("未放入任何資料", () => {
    const stackList = new StackList();

    expect(stackList.isEmpty()).toBe(true);
  });

  it("放入資料後", () => {
    const stackList = new StackList();

    stackList.push(1);

    expect(stackList.isEmpty()).toBe(false);
  });
});

describe("測試 getSize 函式", () => {
  it("未放入任何資料", () => {
    const stackList = new StackList();

    expect(stackList.getSize()).toBe(0);
  });

  it("放入資料後", () => {
    const stackList = new StackList();

    stackList.push(1);
    stackList.push(2);

    expect(stackList.getSize()).toBe(2);
  });
});
