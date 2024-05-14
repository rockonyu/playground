# Day15 - Local Storage

* 在表單內的操作監聽 submit 事件可以全面的捕捉使用者 keyin
* 使用 ```e.preventDefault();``` 可以避免表單送出後頁面重新整理
* 將樣式渲染的部分放入一個函式管理 (populateList)：接收 items 陣列與 platesList DOM 物件
* 對陣列使用 ```map()``` 後回傳的仍是陣列，使用 ```join('')``` 將其合併為一個字串
* 使用 localStorage 的 setItem 儲存資料
* localStorage 僅能存字串，因此透過 ```JSON.stringify()``` 將物件 or 陣列轉為字串形式。
* 你無法監聽新增項目的 click 事件 (因為 addEventListener 時未存在頁面上)，但可以設定事件在 ```<ul></ul>``` 上，再去篩選新增的 ```<li></li>``` 元素