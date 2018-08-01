## MVC模式（Model-View-Controller）

MVC是比较直观的架构模式，用户操作->View（负责接收用户的输入操作）->Controller（业务逻辑处理）->Model（数据持久化）->View（将结果反馈给View）。
![](/Images/MVC001.png)

在通常的开发中，除了简单的 Model、View 以外的所有部分都被放在了 Controller 里面。Controller 负责显示界面、响应用户的操作、网络请求以及与 Model 交互。这就导致了 Controller：

- 逻辑复杂，难以维护。
- 和 View 紧耦合，无法测试。
## MVVM模式(Model-View-ViewModel)
MVVM模式是将“数据模型数据双向绑定”的思想作为核心，因此在View和Model之间没有联系，通过ViewModel进行交互，而且Model和ViewModel之间的交互是双向的，因此视图的数据的变化会同时修改数据源，而数据源数据的变化也会立即反应到View上。
![](/Images/MVC002.png
)

![](/Images/mvvm002.png
)

既然 View 和 Controller 是一对好基友，在 MVVM 里面，干脆把它们当做 View。
现在将原来 Controller 的部分职责拆分出来由 View Model 承担，主要包括：

- 校验用户输入。
- 网络请求。
- 展示层的逻辑，比如格式化字符串。
- 其他不能放入 Model，与 View 无关的逻辑
  
原来的 Controller 现在只负责绑定 View 和 ViewModel。值得注意的是，View Model 不包含与 View 直接关联的部分。一般来说，只要代码中没有#import <UIKit/UIKit.h>即可。