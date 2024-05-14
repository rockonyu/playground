# Day12 - 上上下下左右左右BA

* 將按下的按鍵放入一個陣列
* ```pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);``` 根據文件第一個參數為負數會從後面數回來
* ```pressed.join('')``` 將字串陣列串接