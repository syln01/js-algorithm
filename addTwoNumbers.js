/**
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

 

示例 1：


输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
示例 2：

输入：l1 = [0], l2 = [0]
输出：[0]
示例 3：

输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9,0,0,0,1]
 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
const addTwoNumbers=(l1,l2)=>{

    let sum=new ListNode('0')//创建一个哨兵节点，即第一个节点为无用节点，简化操作，避免链表为空的情况，返回时取头节点的next即可跳过它
    let head=sum;//保留头节点的引用
    let addOne=0;//进位
    while(l1||l2||addOne){
        const v1=l1.val!=null?l1.val:0;
        const v2=l2.val!=null?l2.val:0;
        let remainder=v1+v2+addOne;
        addOne=remainder>=10?1:0;
        
        sum.next=new ListNode(remainder%10)//链接下一个节点，为计算出的余数
        sum=sum.next;//移动到下个节点
        if(l1)l1=l1.next;
        if(l2)l2=l2.next;
    }
    return head.next//返回哨兵节点的next，即需要的结果
}

