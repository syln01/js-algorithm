/**
 * 给你一个链表数组，每个链表都已经按升序排列。

请你将所有链表合并到一个升序链表中，返回合并后的链表。

 

示例 1：

输入：lists = [[1,4,5],[1,3,4],[2,6]]
输出：[1,1,2,3,4,4,5,6]
解释：链表数组如下：
[
  1->4->5,
  1->3->4,
  2->6
]
将它们合并到一个有序链表中得到。
1->1->2->3->4->4->5->6
示例 2：

输入：lists = []
输出：[]
示例 3：

输入：lists = [[]]
输出：[]
 

提示：

k == lists.length
0 <= k <= 10^4
0 <= lists[i].length <= 500
-10^4 <= lists[i][j] <= 10^4
lists[i] 按 升序 排列
lists[i].length 的总和不超过 10^4
 */

const mergeKLists=(lists)=>{
  //合并从start到end-1的链表
    const dfs=(start,end)=>{
        const len=end-start
        if(len==0)return null;
        if(len==1)return lists[start]//无需合并，直接返回
        const left=dfs(start,start+(len>>1))//合并左半部分
        const right=dfs(start+(len>>1),end);//合并右半部分
        return mergeTwoLists(left,right);
    }
    return dfs(0,lists.length)//不要忘记return
}

const mergeTwoLists=(list1,list2)=>{
  const dummyNode=new ListNode(0)
  let point =dummyNode;
  while(list1&&list2){
      if(list1.val>list2.val){
        point.next=list2;
        list2=list2.next;
      }else{
        point.next=list1
        list1=list1.next;
      }
      point=point.next;
  }
  point.next=list1||list2;
  return dummyNode.next;
}