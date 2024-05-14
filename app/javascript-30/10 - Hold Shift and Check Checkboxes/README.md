# Day10 - 按著 shift 後點選 checkbox 批次選擇

* 比較監聽 click 與 change 事件差別
    * change => e 的型別是 Event
    * click => e 的型別是 MouseEvent 內有 shiftKey 屬性，代表是否壓著 shift 鍵 (此情況用 click 較佳)
* 建立變數 ```lastChecked``` 儲存最後點擊的 checkbox
* 僅在 ```e.shiftKey && this.checked``` 才進入判斷邏輯
* 建立變數 ```inBetween``` 藉由目前或前次 checkbox 做切換
* 若 ```inBetween``` 為 true 則勾選 checkbox