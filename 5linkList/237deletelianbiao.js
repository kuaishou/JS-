//力扣237题删除链表中的节点
//请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点。传入函数的唯一参数为 要被删除的节点 。

var deleteNode = function(node) {//巧妙解法
    if(!node.next||!node.next.next){
        console('删除节点不可为最后一个节点')
        return false
    }
    node.val=node.next.val;//把要删除的节点值改为下一个节点的值；然后把该节点的next指针指向下下个节点
    node.next=node.next.next;
};





