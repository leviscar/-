// 千分符
function toThousands(num){
    var num = (num || 0).toString(), res = "";
    while(num.length > 3){
        res = ',' + num.slice(-3) + res;
        num = num.slice(0,num.length - 3);
    } 

    if(num) res = num + res ;
    return res;
}
