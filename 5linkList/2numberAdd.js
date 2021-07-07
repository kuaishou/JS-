//力扣2两数相加

// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

// 请你将两个数相加，并以相同形式返回一个表示和的链表。

// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/add-two-numbers
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


/**
 * Definition for singly-linked list.
 * 
 */
function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

// 1、新建一个空链表
// 2、遍历两个相加的链表

var addTwoNumbers = function(l1, l2) {
    const l3=new ListNode(0);
    let k1=l1;
    let k2=l2;
    let k3=l3;
    let carry=0;
    while(k1||k2){
        const v1=k1?k1.val:0;
        const v2=k2?k2.val:0;
        const addNum=v1+v2+carry;
        carry=Math.floor(addNum/10);
        k3.next=new ListNode(addNum%10)
        if(k1)k1=k1.next;
        if(k2)k2=k2.next;
        k3=k3.next;
    }
    if(carry){
        k3.next=new ListNode(carry)
    }
    return l3.next;//要加next；不然会多一位0
};




