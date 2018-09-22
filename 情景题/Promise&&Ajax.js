var ajaxPromise = function (params) {
    return new Promise((reslove,reject)=>{
        var xhr = new XMLHttpRequest();
        xhr.open('get',params.url,true);
        xhr.onload = reslove;
        xhr.onerror = reject;
        xhr.send();
    })
}

var p1 = ajaxPromise.then((reslove)=>{
    
})
