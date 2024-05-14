# Day11 - 客製 Video Player

* ```player.querySelectorAll('[data-skip]');``` 選取包含 data-skip 屬性的元素
* 有趣的 method 呼叫方式 ```video[video.paused ? 'play' : 'pause']();``` 
* 僅是替換文字可以使用 ```textContent``` 屬性
* 另一種有趣的設定屬性 ```video[this.name] = this.value``` this.name 包含完整的屬性名稱
* 設定樣式：```progressBar.style.flexBasis = 'xxxx'```
* 設定 ```mousedown``` 為 boolean 變數：```mousedown && scrub(e)``` 當 ```mousedown``` 為真才執行 ```scrub(e)```
* 全螢幕模式只有支援到 webkit