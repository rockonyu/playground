# Day13 - Scroll 圖片滑入

* 避免頁面 scroll 時函式被快速且多次執行 => 使用 debounce 函式
* window.scrollY + window.innerHeight => 目前視窗底部高度
* sliderImage.offsetTop + sliderImage.height => 圖片底部的高度
