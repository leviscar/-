function throttle(fn,interval) {
    var doing = false;

    return function () {
        if(doing) return;
    }

    doing = true;
    fn.apply(this,arguments);
    setTimeout(function () {
        doing = false;
    },interval)
}

// 函数节流让指函数有规律的进行调用
// 应用场景：window.resize，游戏中子弹发射(1s只能发射一颗子弹)等；
// 函数节流
// fun 调用函数 delay延时函数

const throttle = (fun,delay,...rest) =>{
    let last = null;
    return () => {
        // 当前时间
        // 类似于 const now = new Date().getTime();
        const now = + new Date();
        // 时间差超过延时
        if(now - last > delay) {
            fun(test);
            last = now;
        }
    }
}

// 函数防抖
// 函数防抖让函数在"调用''之后的一段时间后生效，
// 应用场景:输入框(例：在用户停止输入的500ms后再处理用户数据)

const debouce = (fn,delay,...rest)=>{
    let timer = null;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn(rest);
        },delay);
    }
}