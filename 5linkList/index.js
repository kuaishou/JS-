//链表：js没有链表；可以用object模拟链表
//存储不连续用next指针链接在一起的数据是链表
const a={val:'a'}
const b={val:'b'}
const c={val:'c'}
const d={val:'d'}

a.next=b;//创建链表
b.next=c;
c.next=d;

//遍历列表
let p=a;//声明指针
while(p){
    console.log(p.val)
    p=p.next;//指针指向下一个连表数据
}

//链表里面插入值--不需要移动元素e 插入到c和d之间
const e={val:'e'}

c.next=e;
e.next=d;

//删除链表里面元素e
c.next=d