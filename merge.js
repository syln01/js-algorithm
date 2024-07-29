/**
 * 56. 合并区间
中等
以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

 

示例 1：

输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
示例 2：

输入：intervals = [[1,4],[4,5]]
输出：[[1,5]]
解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
 

提示：

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
 */
const merge=lists=>{
  lists.sort((a,b)=>{
    return a[0]-b[0]?a[0]-b[0]:a[1]-b[1]
  })
  // console.table(lists)
  const len=lists.length
  let res=[]
  let currentInterval=lists[0]
  for(let i=1;i<len;i++){
    if(currentInterval[1]>=lists[i][0]){
      //本次迭代区间与当前区间连续，合并
      currentInterval[1]=Math.max(currentInterval[1],lists[i][1]);
      //这里不能认为后面的尾值更大，因为排序是先头值后尾值
    }else{
      //不连续，将当前区间推入数组，开启新的合并
      res.push(currentInterval)
      currentInterval=lists[i]
    }
  }
  //推入最后一个数组,上面的循环已经迭代到最后一个元素，无论是哪种情况，、
  //他和上一个推入结果数组的区间都不重叠，直接推入
  res.push(currentInterval)
  return res
}
merge([[2,3],[2,2],[3,3],[1,3],[5,7],[2,2],[4,6]])