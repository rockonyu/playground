# Day18 加總影片時間

* ```Array.from()``` 可以將一個類陣列的物件轉為陣列
* ```const [mins, secs] = timeCode.split(':').map(parseFloat);``` 將時間字串用冒號分割，並透過 ```map()``` 傳入 ```parseFloat``` 將結果轉為數字
* 透過 ```reduce()``` 將陣列結果加總 (總秒數)
* 使用除法與取餘數將總秒數轉回時分秒格式