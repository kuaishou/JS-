// 广度优先遍历

const tree2={
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

const bfs=(root)=>{
    const d=[root]
    while(d.length>0){
        const n=d.shift();
        console.log(n.val)
        n.children.forEach(item => {
            d.push(item)
        });
    }

}
bfs(tree2)