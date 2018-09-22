var xhr = createXHR();
xhr.onreadystatechange = function () {
    if(xhr.readyState == 4){
        if((xhr.status >= 200 && xhr.status <300)||xhr.status == 304){
            alert(xhr.responseText);
        }else{
            alert("Request was failed")
        }
    };

};

xhr.open("get",URL,true);// 是否异步发送请求的布尔值
xhr.send(null);


function createXHR() {
    if(typeof XMLHttpRequest != "undefined"){
        return new XMLHttpRequest();
    }else if (typeof ActiveXObject !="undefined"){
        if(typeof arguments.callee.activeXString != "string"){

        }
    }
}

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if(xhr.readyState === 4){
        if(xhr.status>200&&xhr.status<400||xhr.status === 304){
            alert(xhr.responseText);
        }else{
            alert("failed")
        }
    }
}
xhr.open("get",URL,true) // 是否异步发送请求
xhr.send();