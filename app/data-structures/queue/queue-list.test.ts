import { describe, it, expect } from "vitest";
import QueueList from "./queue-list";

describe("測試 enqueue 函式", () => {
  it("能夠從 tail 新增資料", () => {
    const queueList = new QueueList();

    expect(queueList.enqueue(1)).toBe(1);
    expect(queueList.enqueue(2)).toBe(2);
    expect(queueList.enqueue(3)).toBe(3);
  });
});

describe("測試 dequeue 函式", () => {
  it("能夠從 head 移除資料", () => {
    const queueList = new QueueList();

    queueList.enqueue(1);
    queueList.enqueue(2);
    queueList.enqueue(3);

    expect(queueList.dequeue()).toBe(1);
    expect(queueList.dequeue()).toBe(2);
    expect(queueList.dequeue()).toBe(3);
    expect(queueList.dequeue()).toBe(null);
  });
});

describe("測試 isEmpty 函式", () => {
  it("確認 queue 是否包含元素", () => {
    const queueList = new QueueList();

    expect(queueList.isEmpty()).toBe(true);

    queueList.enqueue(1);

    expect(queueList.isEmpty()).toBe(false);

    queueList.dequeue();
    queueList.enqueue(2);

    expect(queueList.isEmpty()).toBe(false);

    queueList.dequeue();

    expect(queueList.isEmpty()).toBe(true);
  });
});

describe("測試 getSize 函式", () => {
  it("確認 queue 裡面項目的數量", () => {
    const queueList = new QueueList();

    queueList.enqueue(3);
    queueList.enqueue(4);

    expect(queueList.getSize()).toBe(2);
  });
});

describe("測試 peek 函式", () => {
  it("確認 peek 回傳內容是否等同 head", () => {
    const queueList = new QueueList();

    queueList.enqueue(1);
    queueList.enqueue(2);
    queueList.enqueue(3);

    expect(queueList.peek()).toBe(1);

    queueList.dequeue();

    expect(queueList.peek()).toBe(2);
  });
});
