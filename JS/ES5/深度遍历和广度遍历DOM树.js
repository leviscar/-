// 深度遍历DOM树
function deep(node) {
    console.log(node);

    if(node.children.length){
        for(var i = 0;i<node.children.length;i++){
            deep(node.children[i]);
        }
    }
}


// 广度遍历