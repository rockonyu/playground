import { describe, it, expect } from "vitest";
import StackArray from "./stack-array";

describe("測試 push 函式", () => {
  it("將資料放入堆疊", () => {
    const stackArray = new StackArray();

    expect(stackArray.push(1)).toBe(1);
    expect(stackArray.push(2)).toBe(2);
  });
});

describe("測試 pop 函式", () => {
  it("從堆疊取出資料", () => {
    const stackArray = new StackArray();

    stackArray.push(1);
    stackArray.push(2);

    expect(stackArray.pop()).toBe(2);
    expect(stackArray.pop()).toBe(1);
    expect(stackArray.pop()).toBe(null);
  });

  it("沒資料的情境", () => {
    const stackArray = new StackArray();

    expect(stackArray.pop()).toBe(null);
  });
});

describe("測試 peek 函式", () => {
  it("未放入任何資料", () => {
    const stackArray = new StackArray();

    expect(stackArray.peek()).toBe(null);
  });

  it("經過 push 後取得頂端的資料", () => {
    const stackArray = new StackArray();

    stackArray.push(1);
    stackArray.push(2);

    expect(stackArray.peek()).toBe(2);
  });

  it("經過 pop 後取得頂端的資料", () => {
    const stackArray = new StackArray();

    stackArray.push(3);
    stackArray.push(4);
    stackArray.pop();

    expect(stackArray.peek()).toBe(3);
  });

  it("不會移除頂端的資料", () => {
    const stackArray = new StackArray();

    stackArray.push(3);
    stackArray.push(4);
    stackArray.peek();

    expect(stackArray.peek()).toBe(4);
  });
});

describe("測試 isEmpty 函式", () => {
  it("未放入任何資料", () => {
    const stackArray = new StackArray();

    expect(stackArray.isEmpty()).toBe(true);
  });

  it("放入資料後", () => {
    const stackArray = new StackArray();

    stackArray.push(1);

    expect(stackArray.isEmpty()).toBe(false);
  });
});

describe("測試 getSize 函式", () => {
  it("未放入任何資料", () => {
    const stackArray = new StackArray();

    expect(stackArray.getSize()).toBe(0);
  });

  it("放入資料後", () => {
    const stackArray = new StackArray();

    stackArray.push(1);
    stackArray.push(2);

    expect(stackArray.getSize()).toBe(2);
  });
});
