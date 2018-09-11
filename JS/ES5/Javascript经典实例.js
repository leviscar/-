// 1. 跨浏览器添加事件
function addEvent(obj,type,fn){
    if(obj.addEventListener){
        obj.addEventListener(type,fn,false);
    }else if(obj.attachEvent){ //IE
        obj.attachEvent('on'+type,fn);
    }
}

// 2. 跨浏览器移除事件
function removeEvent(obj,type,fn){
    if(obj.removeEventListener){
        obj.addEventListener(type,fn,false);
    }else if(obj.attachEvent){
        obj.addEvent('on'+type,fn);
    }
}

// 3. 跨浏览器阻止默认行为
function preDef(ev){
    var e = ev||window.event;
    if(e.preventDefault){
        e.preventDefault();
    }else{
        e.returnValue = false;
    }
}

// 4. 跨浏览器获取目标对象
function getTarget(e){
    if(e.target){ // w3c
        return e.target;
    }else if(window.event.srcElement){ // ie
        return window.event.srcElement;
    }
}

// 5. 跨浏览器获取滚动条位置
function getScrollPosition(){
    return {
        top: document.documentElement.scrollTop || document.body.scrollTop,
        left: document.documentElement.scrollLeft || document.body.scrollLeft
    }
}

// 6. 跨浏览器获取可视窗口大小
function getWindow(){
    if(typeof window.innerWidth != 'undefined'){
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }else{
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    }
}

// 7. js对象冒充
function Person(name,age){
    this.name = name;
    this.age = age;
    this.say = function(){
        return "name:"+this.name+"age:"+this.age;
    }
}

var o = new Object();
Person.call(o,"zhangsan",20);

// 8. js异步加载和同步加载
// 异步加载也叫非阻塞加载，浏览器在下载js的同时,同时还会执行后续的页面处理
// 在script标签内,用JS创建一个script元素
(function(){
    var s = document.createElement('script');
    var x = document.getElementsByTagName('script')[0];
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'http://yourdomain.com/script.js';
    x.parentNode.insertBefore(s,x);
})();
// 平时默认的都是同步加载
<script src="http://yourdomain.com/script.js"></script>

// 9.js获取屏幕坐标
function mousePosition(e) {
    if(e.pageX || e.pageY){
        return {x:e.pageX,y:e.pageY};
    }

    return {
        x: e.clientX + document.body.scrollLeft - document.body.clientLeft,
        y: e.clientY + document.body.scrollTop - document.body.clientTop
    }
}

function mouseMove(e){
    e = e||window.event;
    var mousePos = mousePosition(e);
    document.getElementById('xxx').innerText = mousePos.x;
    document.getElementById('yyy').innerText = mousePos.y;

}

document.addEventListener('mousemove',mouseMove,false);