import { describe, it, expect } from "vitest";
import QueueArrayCircular from "./queue-array-circular";

describe("測試 enqueue 函式", () => {
  it("能夠從 tail 新增資料", () => {
    const queueList = new QueueArrayCircular();

    expect(queueList.enqueue(1)).toBe(1);
    expect(queueList.enqueue(2)).toBe(2);
    expect(queueList.enqueue(3)).toBe(3);
  });
});

describe("測試 dequeue 函式", () => {
  it("能夠從 head 移除資料", () => {
    const queueList = new QueueArrayCircular();

    queueList.enqueue(1);
    queueList.enqueue(2);
    queueList.enqueue(3);
    queueList.enqueue(4);

    //      1    2    3 .  4
    // |----|----|----|----|
    // head                tail

    expect(queueList.dequeue()).toBe(1);
    expect(queueList.dequeue()).toBe(2);
    expect(queueList.dequeue()).toBe(3);

    //                     4
    // |----|----|----|----|
    //               head  tail

    queueList.enqueue(5);
    queueList.enqueue(6);
    queueList.enqueue(7);

    // 5    6    7         4
    // |----|----|----|----|
    //           tail head

    queueList.enqueue(8);

    //      4    5    6    7    8
    // |----|----|----|----|----|----|----|----|----|
    // head                     tail

    queueList.enqueue(9);
    queueList.enqueue(10);

    //      4    5    6    7    8    9   10
    // |----|----|----|----|----|----|----|----|----|
    // head                              tail

    expect(queueList.dequeue()).toBe(4);
    expect(queueList.dequeue()).toBe(5);
    expect(queueList.dequeue()).toBe(6);
    expect(queueList.dequeue()).toBe(7);
    expect(queueList.dequeue()).toBe(8);
    expect(queueList.dequeue()).toBe(9);
    expect(queueList.dequeue()).toBe(10);
  });
});

describe("測試 isEmpty 函式", () => {
  it("確認 queue 是否包含元素", () => {
    const queueList = new QueueArrayCircular();

    queueList.enqueue(1);
    queueList.enqueue(2);
    queueList.dequeue();
    queueList.dequeue();

    expect(queueList.isEmpty()).toBe(true);
  });
});

describe("測試 getSize 函式", () => {
  it("確認 queue 裡面項目的數量", () => {
    const queueList = new QueueArrayCircular();

    queueList.enqueue(1);
    queueList.enqueue(2);
    queueList.enqueue(3);
    queueList.enqueue(4);

    //      1    2    3    4
    // |----|----|----|----|
    // head               tail

    queueList.dequeue();
    queueList.dequeue();
    queueList.dequeue();

    //                     4
    // |----|----|----|----|
    //               head  tail

    expect(queueList.getSize()).toBe(1);

    queueList.enqueue(5);
    queueList.enqueue(6);
    queueList.enqueue(7);

    // 5    6    7         4
    // |----|----|----|----|
    //          tail  head

    expect(queueList.getSize()).toBe(4);

    queueList.enqueue(8);
    queueList.enqueue(9);

    //      4    5    6    7    8    9
    // |----|----|----|----|----|----|----|----|----|
    // head                         tail

    expect(queueList.getSize()).toBe(6);
  });
});

describe("測試 peek 函式", () => {
  it("確認 peek 回傳內容是否等同 head", () => {
    const queueList = new QueueArrayCircular();
    queueList.enqueue(1);
    queueList.enqueue(2);
    queueList.enqueue(3);

    expect(queueList.peek()).toBe(1);

    queueList.dequeue();

    expect(queueList.peek()).toBe(2);
  });
});
