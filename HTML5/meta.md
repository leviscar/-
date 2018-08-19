# META 标签
meta标签用于定义页面的说明，关键字，最后修改日期和其他元数据（meta-data). 这些元数据将服务于浏览器（如何布局或重载页面），搜索引擎和其他网络服务。
## 组成
meta标签共有两个属性，`http-equiv`和`name`
1. name属性
   
   name属性主要用于描述网页，比如网页的关键词，叙述等。与之对应的属性值为content，content中的内容是对name填入类型的具体描述，便于搜索引擎抓取。meta标签中name属性语法格式是：`<meta name="参数" content="具体的描述">`

   1.  keywords(关键字) 说明：用于告诉搜索引擎，你网页的关键字。如`<meta name="keywords" content="Lxxyx,博客，文科生，前端">`
   2.  description(网站内容的描述) 说明：用于告诉搜索引擎，你网站的主要内容。举例:`<meta name="description" content="文科生，热爱前端与编程。目前大二，这是我的前端博客">`
   3.  viewport(移动端的窗口) 这个属性常用于设计移动端网页. 举例 `<meta name="viewport" content="width=device-width, initial-scale=1">`
   4.  renderer(双核浏览器渲染方式) 说明：renderer是为双核浏览器准备的，用于指定双核浏览器默认以何种方式渲染页面。比如说360浏览器。举例：

```html
<meta name="renderer" content="webkit"> //默认webkit内核
<meta name="renderer" content="ie-comp"> //默认IE兼容模式
<meta name="renderer" content="ie-stand"> //默认IE标准模式 
```
2. http-equiv
   
   相当于HTTP的作用，比如说定义些HTTP参数啥的。
meta标签中http-equiv属性语法格式是：
`<meta http-equiv="参数" content="具体的描述">`


    1.  content-Type(设定网页字符集)(推荐使用HTML5的方式) 说明：用于设定网页字符集，便于浏览器解析与渲染页面举例：

    ```html
    <meta http-equiv="content-Type" content="text/html;charset=utf-8">  //旧的HTML，不推荐
    <meta charset="utf-8"> //HTML5设定网页字符集的方式，推荐使用UTF-8
    ```
    2.  X-UA-Compatible(浏览器采取何种版本渲染当前页面)
   
    3.  cache-control(指定请求和响应遵循的缓存机制)
        1.  no-cache: 先发送请求，与服务器确认该资源是否被更改，如果未被更改，则使用缓存。
        2.  no-store: 不允许缓存，每次都要去服务器上，下载完整的响应。（安全措施）
        3.  public : 缓存所有响应，但并非必须。因为max-age也可以做到相同效果
        4.  private : 只为单个用户缓存，因此不允许任何中继进行缓存。（比如说CDN就不允许缓存private的响应）
        5.  max-age : 表示当前请求开始，该响应在多久内能被缓存和重用，而不去服务器重新请求。例如：max-age=60表示响应可以再缓存和重用 60 秒。
    4.  
    5. expires(网页到期时间)  说明:用于设定网页的到期时间，过期后网页必须到服务器上重新传输。
    6. refresh(自动刷新并指向某页面)
   `<meta http-equiv="refresh" content="2；URL=http://www.lxxyx.win/"> //意思是2秒后跳转向我的博客`
    7. Set-Cookie(cookie设定) 说明：如果网页过期。那么这个网页存在本地的cookies也会被自动删除
    ```html
        <meta http-equiv="Set-Cookie" content="name, date"> //格式

        <meta http-equiv="Set-Cookie" content="User=Lxxyx; path=/; expires=Sunday, 10-Jan-16 10:00:00 GMT"> //具体范例
    ```
    1.  **用法2.(禁止百度自动转码)**
    说明：用于禁止当前页面在移动端浏览时，被百度自动转码。虽然百度的本意是好的，但是转码效果很多时候却不尽人意。所以可以在head中加入例子中的那句话，就可以避免百度自动转码了。举例：`<meta http-equiv="Cache-Control" content="no-siteapp" />`






1. 
2. 




