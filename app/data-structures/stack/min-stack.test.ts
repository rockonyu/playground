import { describe, it, expect } from "vitest";
import MinStack from "./min-stack";

describe("測試 push 函式", () => {
  it("將資料放入堆疊", () => {
    const minStack = new MinStack();

    expect(minStack.push(1)).toBe(1);
    expect(minStack.push(2)).toBe(2);
  });
});

describe("測試 pop 函式", () => {
  it("從堆疊取出資料", () => {
    const minStack = new MinStack();

    minStack.push(1);
    minStack.push(2);

    expect(minStack.pop()).toBe(2);
    expect(minStack.pop()).toBe(1);
    expect(minStack.pop()).toBe(null);
  });

  it("沒資料的情境", () => {
    const minStack = new MinStack();

    expect(minStack.pop()).toBe(null);
  });
});

describe("測試 peek 函式", () => {
  it("未放入任何資料", () => {
    const minStack = new MinStack();

    expect(minStack.peek()).toBe(null);
  });

  it("經過 push 後取得頂端的資料", () => {
    const minStack = new MinStack();

    minStack.push(1);
    minStack.push(2);

    expect(minStack.peek()).toBe(2);
  });

  it("經過 pop 後取得頂端的資料", () => {
    const minStack = new MinStack();

    minStack.push(3);
    minStack.push(4);
    minStack.pop();

    expect(minStack.peek()).toBe(3);
  });

  it("不會移除頂端的資料", () => {
    const minStack = new MinStack();

    minStack.push(3);
    minStack.push(4);
    minStack.peek();

    expect(minStack.peek()).toBe(4);
  });
});

describe("測試 isEmpty 函式", () => {
  it("未放入任何資料", () => {
    const minStack = new MinStack();

    expect(minStack.isEmpty()).toBe(true);
  });

  it("放入資料後", () => {
    const minStack = new MinStack();

    minStack.push(1);

    expect(minStack.isEmpty()).toBe(false);
  });
});

describe("測試 getSize 函式", () => {
  it("未放入任何資料", () => {
    const minStack = new MinStack();

    expect(minStack.getSize()).toBe(0);
  });

  it("放入資料後", () => {
    const minStack = new MinStack();

    minStack.push(1);
    minStack.push(2);

    expect(minStack.getSize()).toBe(2);
  });
});

describe("測試 peekMin 函式", () => {
  it("根據當前資料取得最小值", () => {
    const minStack = new MinStack();

    minStack.push(1);
    minStack.push(2);
    minStack.push(9);
    minStack.push(-5);
    minStack.push(1);

    expect(minStack.peekMin()).toBe(-5);

    minStack.pop();
    minStack.pop();

    expect(minStack.peekMin()).toBe(1);

    minStack.pop();

    expect(minStack.peekMin()).toBe(1);
  });

  it("未放入任何資料", () => {
    const minStack = new MinStack();

    expect(minStack.peekMin()).toBe(null);
  });
});
