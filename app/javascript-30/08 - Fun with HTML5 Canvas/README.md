# Day8 - Canvas!

* 基本 canvas 操作 (```beginPath()、moveTo()、lineTo()、stroke()```)
* lineJoin & lineCap 為 round 畫出來的線為圓形
* 定義 isDrawing 變數代表滑鼠點擊
* mousedown 時重設定 lastX 與 lastY 變數
* strokeStyle 使用 hsl 色碼
* 使用 ctx.stroke() 函式畫線
* 畫筆的尺寸會在 1~100 間變換 (依照 direction 決定遞增或遞減)