# Day14 - 傳值或傳參考?

* strings, numbers and booleans 都是直接傳值 拷貝到其他變數後不會互相影響
* object 與 array 其實也是傳值，但其值為一個 '參考' 拷貝到其他變數後會影響原本的物件
* array 的 deep copy => ```[...players]```
* ```Object.assign``` 這只會 deep copy 第一階層的屬性
* object 窮人版的 deep copy ```JSON.parse(JSON.stringify(wes));```
