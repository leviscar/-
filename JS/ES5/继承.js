function SuperType(name) {
    this.name = name; 
    this.colors = ["red","blue","green"];
}

SuperType.prototype.sayName = function () {
    alert(this.name);
}

function SubType(name,age) {
    // 继承属性
    SuperType.call(this,name);
    this.age;
}

// 继承方法
SubType.prototype = new SuperType();
SubType.prototype.sayAge = function () {
    alert(this.age);
}