# Day2 小結：

* 今天是數學作業
* 使用 ```transform: rotate(90deg)``` 使 div 垂直於水平面
* transform 預設 rotate 是以 (50%) 位置為中心點，使用 ```transform-origin: 100%``` 可以以最右邊 (100%) 位置為中心
* 使用 ```transition: all .05s``` 為 transform 加上補間動畫
* ```transition-timing-function``` 調整 transition 動畫
* ```setInterval(parm1, parm2)``` 代表反覆執行 parm1 函式，parm2 為毫秒數
* 使用 ```new Date()``` 與其 api 取得當前日期與時、分、秒
* 需要使用秒數換算度數，公式為 ```(currentSec/60) * 360``` 再加上原先旋轉的 90 度
* 有個問題是：當從 59 秒 (450deg) 到 0 秒 (90deg) 時，加上的 transition 屬性會使其逆時鐘旋轉回 90 deg，影片提到兩種解法：
    * 450 deg 採用繼續累加的計算方式而非回到 90 deg
    * 當回到 0 秒暫時移除 transition 設定，爾後才加回 transition
    * 我是使用第三種：註解 transition 的 css 段落 (偷懶)
* 我使用 width 與 left 調整時針與分針長度