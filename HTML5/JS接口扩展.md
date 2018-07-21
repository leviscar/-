# HTML5 JS 接口拓展
##  1. 与CSS类有关的扩充
1. `getElementsByClassName()`方法

    接收一个参数， 即一个包含一个或者多个类名的字符串，返回带有指定类的所有元素的Nodelist
2. `classList` 

    HTML5新增一种操作类名的方式
    可以以此访问到所有的类名，为所有元素添加classList属性
## 2. 焦点管理
1. `document.activeElement`属性

这个属性始终会引用DOM中当前获得了焦点的元素

## 3. HTMLDocument的变化
1. `readyState`属性

`Document`的`readyState`属性有两个可能值
    - `loading` 正在加载文档
    - `complete`已经加载完文档


2. 兼容模式--`compatMode`属性

```
if(document.compatMode == "CSS1Compat"){
    alert("Standards mode");
}else{
    alert("Quirk mode");
}
```
3. `head`属性

`var head = document.head||document.getElementByTagName("head")[0]`

## 4. 字符集属性
1. `charset`属性表示文档中实际使用的字符集
2. `defaultCharset`表示根据默认浏览器及操作系统的设置

## 5. 自定义数据属性
1. 可以为元素添加非标准属性，但是要加前缀`data-`,目的是为元素提供与渲染无关的信息 