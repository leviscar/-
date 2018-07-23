![](/Images/lifecircle001.png)
## 1. 组件的挂载
组件挂载是最基本的过程，这个过程主要做组件状态的初始化。
```
import React, { Component,ReactPropTypes } from "react";

class App extends Component {
    static ReactPropTypes = {

    };

    static defaultProps = {

    };

    constructor(props){

    };

    componentWillMount(){

    };
    componentDidMount(){

    };
    render(){
        return <div>This is a demo</div>
    }
}
```
## 2. 组件的卸载
组件卸载非常简单，只有 `componentWillUnmount` 这一个卸载前状态：
```
import React, { Component, PropTypes } from 'react';
class App extends Component {
    componentWillUnmount() {
        // ...
    }
    render() {
        return <div>This is a demo.</div>;
    }
}
```
在 componentWillUnmount 方法中，我们常常会执行一些清理方法，如事件回收或是清除定时器

## 3. 数据更新过程
更新过程指的是父组件向下传递 props 或组件自身执行 setState 方法时发生的一系列更新动作。

```
import React, { Component,ReactPropTypes } from "react";

class App extends Component {
    componentWillReceiveProps(nextProps) {
        // this.setState({})
    }
    shouldComponentUpdate(nextProps,nextState){
        // return true;
    }
    componentWillUpdate(nextProps,nextState){
        //
    }
    componentDidUpdate(prevProps,prevState){
        //
    }
    render(){
        return <div>This is a demo</div>
    }
}
```
如果组件自身的 state 更新了，那么会依次执行 shouldComponentUpdate、 componentWillUpdate 、
render 和 componentDidUpdate。

shouldComponentUpdate 是一个特别的方法，它接收需要更新的 props 和 state，让开发者增加
必要的条件判断，让其在需要时更新，不需要时不更新。因此，当方法返回 false 的时候，组件
不再向下执行生命周期方法。