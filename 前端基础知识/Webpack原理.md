## Webpack原理
### Webpack功能介绍
- webpack是一个打包模块的机制,把依赖的模块转化成可以代表这些包的静态文件
- webpack通过识别你的入口文件,识别你的模块依赖,来打包你的代码
- webpack做的就是分析代码,转换代码,编译代码,输出代码。
- webpack中每个模块有一个唯一的id，是从0开始递增的。整个打包后的bundle.js是一个匿名函数自执行。参数则为一个数组。数组的每一项都为个function。function的内容则为每个模块的内容，并按照require的顺序排列。
### webpack loader
- webpack为什么能把任何形式的资源都视作模块呢？因为loader机制。不同的资源采用不同的loader进行转换。CMD、AMD 、import、css 、等都有相应的loader去进行转换。那为什么我们平时写的es6的模块机制，不用增加import的loader呢。因为我们使用了babel把import转换成了require。
- 在解析文件时，webpack会自动去调用响应的loader。loader 本质上是一个函数，输入参数是一个字符串，输出参数也是一个字符串。当然，输出的参数会被当成是 JS 代码，从而被 esprima 解析成 AST，触发进一步的依赖解析。webpack会按照从右到左的顺序执行loader。

### 如何实现一个简单的webpack
1. 读取文件分析依赖模块
2. 对模块进行解析执行（深度遍历）
3. 针对不同的模块使用不同的loader
4. 编译模块，生成抽象语法树AST
5. 循环遍历AST树，拼接输出js