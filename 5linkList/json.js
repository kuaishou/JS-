//遍历链表的方式遍历json


var jsons={
    a:{b:{c:1}},
    e:{d:2}
}
var path=['a','b','c']
var p=jsons
path.forEach(function(index){
    p=p[index]
})

console.log(p)
console.log(jsons)



