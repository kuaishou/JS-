//广度优先遍历
const graph=require('./graph')

const setArry=new Set()

setArry.add(2)
const eachArry=[2]

while(eachArry.length){
    let q=eachArry.shift();
    console.log(q)
    graph[q].forEach(c => {
        if(!setArry.has(c)){
            eachArry.push(c)
            setArry.add(c)
        }
    });
}



