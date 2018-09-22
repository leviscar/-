# webpack 优化机制
1. 配置`resolve.module`
2. 配置`loader`的`include && exclude`
3. 使用 `webpack-parallel-uglify-plugin` 插件来压缩代码
    1. 优化原理
        1. 原生的`Uglify.js`是单线程的,`webpack-parallel-uglify-plugin`
   
4. `HappyPack`来加速构建代码
    1. 由于运行在 Node.js 之上的 Webpack 是单线程模型的，所以 Webpack 需要处理的事情只能一件一件地做，不能多件事一起做
    2. 而 HappyPack 的处理思路是：将原有的 webpack 对 loader 的执行过程，从单一进程的形式扩展多进程模式，从而加速代码构建。
5. 利用 DllPlugin 和 DllReferencePlugin 预编译资源模块
    1. 我们的项目依赖中通常会引用大量的 npm 包，而这些包在正常的开发过程中并不会进行修改，但是在每一次构建过程中却需要反复的将其解析，而下面介绍的两个插件就是用来规避此类损耗的
    2. 注意：DllPlugin 必须要在 DllReferencePlugin 执行前先执行一次，dll 这个概念应该也是借鉴了 windows 程序开发中的 dll 文件的设计理念。
6. 