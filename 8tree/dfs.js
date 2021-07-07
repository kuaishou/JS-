// 深度优先遍历

const tree1={
    val:'a',
    children:[{
        val:'b',
        children:[{
            val:'d',
            children:[]
        },{
            val:'e',
            children:[]
        }]
    },{
        val:'c',
        children:[{
            val:'f',
            children:[]
        },{
            val:'g',
            children:[]
        }]
    }]
}

const dfs=(root)=>{
    console.log(root.val)
    root.children.forEach((res)=>{
        dfs(res)
    });
}
dfs(tree1)


