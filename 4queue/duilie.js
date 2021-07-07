//第四章队列：一种先入先出的数据结构
//js没有队列这个数据结构可以用arry数组模拟队列
const queue =[];//创建队列
queue.push(1)//入队 1
queue.push(2)
queue.push(3)

const item1=queue.shift()//出队 1
const item2=queue.shift()//出队 2
const item3=queue.shift()//出队 3

