## React 渲染过程
1. 初次渲染过程
![first](../Images/reactDOMRender.png)
从JSX渲染成真实DOM的大体过程如下：
    1. parse过程将JSX解析成Virtual DOM, 是一种抽象语法树(AST)
    2. compile过程则将AST通过DOM API编译成页面真实的DOM
2. 二次渲染过程如下：
![second](/Images/ReactDOM002.png)
- 每次生成的页面DOM渲染后，其对应的Virtual Dom也会缓存起来
- 当JSX发生变化时，会首先根据新的JSX生成一个全新的Virtual Dom
- 新的Virtual Dom生成后，会检测是否存在旧的Virtual Dom
- 如果存在旧的Virtual Dom，则通过react diff算法比较新旧Virtual Dom之间的差异，得出一个从旧Virtual Dom转换到新Virtual Dom的最少操作(minimum operating)
- 最后，页面旧的真实Dom，根据刚刚react diff算法得出的最少操作，通过Dom api进行节点的增、删、改，得出新的真实Dom；

## React diff 算法
大家一定在怀疑diff算法的性能，因为传统的用递归算法来比较两棵树的时间复杂度是O(n^3)，真是烂到了极致，但是，React通过几个先验条件将diff的算法复杂度控制在了O(n)。下面讲一下这几个条件：
### 1. 只在同层级做比较
在React 的diff算法中，两个virtual dom树的比较只在同层级进行。这样，只需一遍，即可遍历整棵树。这样做，是忽略了节点的跨层移动，因为web中节点的跨层操作较少。同时我们在使用React时，也要尽量避免这样做。
### 2. 基于组件比较

 在React 的diff算法中，virtual dom树的比较只在同组件进行。对于不同组件，即使结构相似，也不进行比较，而是直接执行删除+重建操作。这样做，是强化组件的概念，因为正常情况下，不同组件的页面结构是不一样的。
 ![](/Images/reactDom005.png)
算法计算得出的操作是：删除body的子节点div及其子节点，创建body子节点div及其子节点p和子节点input。

如使用传统的diff算法，会计算出只需删除div的子节点a，并创建div子节点input。

而采用react的diff算法，两个Virtual Dom 比较时，发现绿框内结构为不同的组件，则绿框内容不做比较，直接删除重建。

### 3. 节点使用唯一属性key
 在React 的diff算法中，virtual dom树的节点可以通过key标识其身份，提高节点同级同组移动时的性能。增加身份标识来作为节点是否需要修改的一个条件。
 ![](/Images/dom006.png)
算法计算得出的操作只需要：移动div节点到最后即可。

若使用传统的diff算法，判断body第一个子节点，旧的为div，新的为p，节点不一样，则删除div节点，新增插入p节点。之后节点操作类似，因此总的需要进行三次节点删除和新增。

而采用react的diff算法，因为节点多了key来标识，两个Virtual Dom 比较时，发现level1下的三个节点其实是一样的（key=1、key=2、key=3）。