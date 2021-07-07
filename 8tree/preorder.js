//非递归先序遍历
const tree=require('./bt')


//利用堆栈的后进先出特性
const preorder=(root)=>{
    if(!root) return
    const stack=[root]
    while(stack.length>0){
        const d=stack.pop()
        console.log(d.val)
        if(d.right)stack.push(d.right)//先进后出  出来的时候先left后right
        if(d.left)stack.push(d.left)
    }
}

preorder(tree)