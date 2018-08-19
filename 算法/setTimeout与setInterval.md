#  setTimeout和setInterval之间的互相实现

## 使用setTimeout实现setInterval
1. 为啥要用setTimeout实现setInterval
    1. setInterval 回调函数出错，不会终止
    2. setInterval 不能设置执行几次，不方便
    3. setInterval .不去关心回调函数是否还在运行
在某些情况下，函数可能需要比间隔时间更长的时间去完成执行。比如说是用setInterval每隔5秒对远端服务器进行轮询，网络延迟，服务器无响应以及其他因素将会阻止请求按时按成。结果会导致返回一串无必要的排成队列请求。

2. 具体实现

```javascript

function interval(func,w,t){
    var interv = function(){
        if(typeof t === "undefined"||t-->0){
            setTimeout(interv,w);
            try{
                func.call(null);
            }catch(e){
                t = 0;
                throw e.toString();
            }
        }
    }
    setTimeout(interv,w);
}
```

```javascript
// 测试代码
interval(function(){
    console.log("run");
},10,10);
```
## 使用setInterval实现setTimeout

```javascript
var testTimer = function(func,w){
    var timer = setInterval(function(){
        console.log("run");
        clearInterval(timer);
    },10)
}
```