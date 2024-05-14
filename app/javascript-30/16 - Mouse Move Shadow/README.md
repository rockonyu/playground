# Day16 - Mousemove SHADOW!!!!

* 另一堂數學課
* HTML5 的 contenteditable 可以直接在頁面編輯文字
* 在 hero 元素上監聽 mousemove 事件，取得畫面的高與寬 (offsetWidth 與 offsetHeight) 透過 e 取得當前滑鼠所在的 offsetX 與 offsetY
* 但 offsetX 與 offsetY 因為 e.target 目標不同而變化，因此要確保當目標不是 hero 元素時，x 與 y 需要加上該元素的 e.target.offsetLeft 與  e.target.offsetTop 才能體現滑鼠具體的座標
* ```(x / width * walk) - (walk / 2)``` 將滑鼠目前位置轉換為偏移量 => (目前滑鼠X軸 / 畫面寬度) * 偏移量最大值。另外，扣掉偏移量最大值除 2 是因為我們希望最後數值的呈現是 (-50~50) 而非 (0~100)
* 文字的 text-shadow 提供四個參數供設定：offset-x | offset-y | blur-radius | color。將計算完成的 x、y 放入對應位置、設定模糊與顏色即可
* text-shadow 用逗號串聯多個，透過乘負 1 可使其往反方向偏移。