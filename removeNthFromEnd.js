/**
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

 

示例 1：


输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
示例 2：

输入：head = [1], n = 1
输出：[]
示例 3：

输入：head = [1,2], n = 1
输出：[1]
 

提示：

链表中结点的数目为 sz
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
 

进阶：你能尝试使用一趟扫描实现吗？
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
/**
 * 
 * 链表类型一般整一个哨兵节点会好操作一点
 * 此题可使用快慢指针，快指针先走n步，到结尾时，慢指针刚好到要删除节点的头结点
 */
const removeNthFromEnd=(head,n)=>{
  let dummyNode=new ListNode(0,head)
  let fast=slow=dummyNode;
  for(let i=0;i<n;i++){
    fast=fast.next;
  }
  // if(!fast)return dummyNode.next
  while(fast.next!=null){
    fast=fast.next;
    slow=slow.next;
  }
  slow.next=slow.next.next
  return dummyNode.next
}