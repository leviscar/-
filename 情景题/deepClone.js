function deepClone(source,des) {
    var des = des || {};
    for(var i in source){
        if(typeof source[i] === "object"){
            des[i] = source[i].constructor===Array?[]:{};
            deepClone(source[i],des[i]);
        }else{
            des[i] = source[i];
        }
    }
    return des;
}

var a = [{a:1},{b:2}];
var b = [];
var c = Object.assign([],a);

console.log(deepClone(a,b));
console.log(c);

c[0].a = 2;
console.log(c);
console.log(a);