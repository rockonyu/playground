# Day1 小結：

* 使用 getElementByTagName 取得的是 HTMLCollection，沒有 forEach
* 使用 querySelectorAll 取得的是 NodeList，則可以使用 forEach
* keypress v.s. keydown 
    1. keypress 判斷現在按下甚麼按鍵，區分大小寫 => 使用 which 或 charCode
    2. keydown 判斷實體鍵盤的按鍵被按下，不區分大小寫 => 使用 keyCode
* 使用到 transitionend 事件的監聽，當 css 的 transition 結束時觸發
* 在 css 內使用 ```transform: scale(1.1);``` 當元素包含 playing 樣式時產生變形
* 對 HTMLDivElement 的 classList 屬性使用 ```add()``` 或 ```remove()``` 新增移除樣式
* 設定 HTMLAudioElement 的 currentTime 為 0 代表使其從頭撥放
* 使用 HTMLAudioElement 的 ```play()``` 進行聲音檔撥放
