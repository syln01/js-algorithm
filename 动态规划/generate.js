/**
 * 118. 杨辉三角
简单
相关标签
相关企业
给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。

在「杨辉三角」中，每个数是它左上方和右上方的数的和。

示例 1:

输入: numRows = 5
输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
示例 2:

输入: numRows = 1
输出: [[1]]
 
 */
/**
 * 
 * 转移方程        dp[i][j]=dp[i-1][j-1]+dp[i-1][j]
 */
const generate=numRows=>{
  let dp=[]
  // dp[0]=[1]
  // if(numRows==1){
  //   return dp;
  // }
  // dp[1]=dp[1,1]
  for(let i=0;i<numRows;i++){
    // if(!dp[i])
      dp[i]=[]
    for(let j=0;j<i+1;j++){
      if(j==0||j==i){
        dp[i][j]=1
      }else{
        dp[i][j]=dp[i-1][j-1]+dp[i-1][j]
      }
    }
  }
  return dp
}