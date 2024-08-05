/**
 * 

74. 搜索二维矩阵

给你一个满足下述两条属性的 m x n 整数矩阵：

每行中的整数从左到右按非严格递增顺序排列。
每行的第一个整数大于前一行的最后一个整数。
给你一个整数 target ，如果 target 在矩阵中，返回 true ；否则，返回 false 。

示例 1：


输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
输出：true
示例 2：


输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
输出：false
 

提示：

m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-104 <= matrix[i][j], target <= 104
 */
const searchMatrix=(matrix,target)=>{
  const row=matrix.length;
  const col=matrix[0].length;
  let left=0;
  let right=row-1;
  let mid;
  while(left<=right){
    mid=(left+right)>>1;
    if(matrix[mid][0]>target){
       right=mid-1
    }else if(matrix[mid][0]<target){
      left=mid+1;
    }else{
      return true
    }
  }
  //这里我也不知道为什么要=right，但是写成left不能ac
  const targetRow=right;
  if(right<0||right>=row)return false
  left=0;
  right=col-1
  while(left<=right){
    mid=(left+right)>>1;
    if(matrix[targetRow][mid]>target){
      right=mid-1
    }else if(matrix[targetRow][mid]<target){
      left=mid+1
    }else{
      return true
    }
  }
  return false
}
const arr=[[1,3,5,7],[10,11,16,20],[23,30,34,60]]
console.log(searchMatrix(arr,3))