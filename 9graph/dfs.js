//深度优先遍历
const graph=require('./graph')

const setArry=new Set()

const dfs=(n)=>{
    console.log(n)
    setArry.add(n)
    graph[n].forEach(c => {
        if(!setArry.has(c)){
            dfs(c)
        }
    });
}

dfs(2)



