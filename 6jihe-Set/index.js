//ES6新增了Set集合数据结构；
//集合：是一种无序且唯一的数据结构
//利用集合唯一性何以数组去重

//数组去重操作
const arr =[1,1,22,22,3]
console.log(new Set(arr))
const arr2=[... new Set(arr)]
console.log(arr2)


//判断元素是否在集合里 Set的has方法
let Isarr=new Set(arr)
let has1 =Isarr.has(1)
let has2 =Isarr.has(4)
console.log('has方法',has1)
console.log('has方法',has2)


//求set1和set2交集
//利用数组方法求交集
let set1=new Set([1,22,33])
let set2=new Set([1,22,88])

const set3=new Set([...set1].filter((item) => {return set2.has(item)}))

console.log("交集",[...set3])


