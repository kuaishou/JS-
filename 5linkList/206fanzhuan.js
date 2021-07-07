//力扣206反转一个单链表。
//反转一个单链表。

// 示例:

// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL
// 进阶:
// 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/reverse-linked-list

var reverseList = function(head) {
    let p1 = head;
    let p2 = null;
    while(p1){
        const tmp=p1.next;
        p1.next=p2;
        p2=p1;
        p1=tmp;
    }
    return p2;
};





