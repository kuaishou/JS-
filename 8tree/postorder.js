//非递归中序遍历
const tree=require('./bt')


//利用堆栈的后进先出特性
const postorder=(root)=>{
    if(!root) return
    const stack=[root]
    const postStack=[]
    while(stack.length>0){
        const d=stack.pop()
        postStack.push(d)
        if(d.left)stack.push(d.left)
        if(d.right)stack.push(d.right)//先进后出  出来的时候先left后right
    }
    while(postStack.length){
        const n=postStack.pop()
        console.log(n.val)
    }
}

postorder(tree)