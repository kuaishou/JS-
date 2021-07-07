// 深度优先遍历

const json={
   a:{b:{c:1}},
   d:[1,2]
}

const dfs=(n,path)=>{
    Object.keys(n).forEach(k=>{
        console.log(path.concat(k))
        dfs(n[k],path.concat(k))
    })

}


dfs(json,[])