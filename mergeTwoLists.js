/**
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
示例 1：


输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
示例 2：

输入：l1 = [], l2 = []
输出：[]
示例 3：

输入：l1 = [], l2 = [0]
输出：[0]
 

提示：

两个链表的节点数目范围是 [0, 50]
-100 <= Node.val <= 100
l1 和 l2 均按 非递减顺序 排列
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2)=> {
    const dummyNode=new ListNode(0);
    let point=dummyNode;
    // dummyNode.next=list1.val>list2.val?list2:list1;
    while(list1!=null&&list2!=null){
      if(list1.val<list2.val){
        point.next=list1;
        list1=list1.next;
      }else{
        point.next=list2
        list2=list2.next;
      }
    point=point.next;
    }
    if(list1){
      point.next=list1
    }else{
      point.next=list2
    }
    return dummyNode.next
};

//递归解法，没看懂
// var mergeTwoLists = function(l1, l2) {
//   if (l1 === null) {
//       return l2;
//   } else if (l2 === null) {
//       return l1;
//   } else if (l1.val < l2.val) {
//       l1.next = mergeTwoLists(l1.next, l2);
//       return l1;
//   } else {
//       l2.next = mergeTwoLists(l1, l2.next);
//       return l2;
//   }
// };

