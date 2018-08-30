// 1. 利用对象特性进行去重
function unique(arr) {
    var res = [];
    var obj = {};
    for(var i =0;i<arr.length;i++){
        if(!obj[arr[i]]){
            obj[arr[i]] = 1;
            res.push(arr[i]);
        }
    }
    return res;
}
// test 
console.log(unique([1,1,2,3,5,3,1,5,6,7,4]))