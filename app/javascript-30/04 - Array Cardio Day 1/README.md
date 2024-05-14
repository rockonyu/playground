# Day4 - Array 函數：

* filter: 回傳一個 boolean, 若為 true 則該項目被保留
* map: 將原始物件對應到新的物件
* sort: 回傳 int, 若小於零則該項目會往前排 大於零該項目會往後排
* reduce: 可以將一個陣列透過特定函式回傳一個值並且累計
* Array.from() 會從類陣列(array-like)或是可迭代的物件建立一個新的陣列實例
* includes() 函式檢查一組字串是否在另一個字串內出現，回傳 true 或 false
* ```const [aLast, aFirst]``` 可以把包含兩個字串的陣列，其值分別指派給 aLast 與 aFirst
* reduce 可以傳入一個空物件，並回傳該物件交給下一次迴圈的項目