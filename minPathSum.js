/**
 * 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，
 * 使得路径上的数字总和为最小。

说明：每次只能向下或者向右移动一步。


示例 1：


输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
输出：7
解释：因为路径 1→3→1→1→1 的总和最小。
示例 2：

输入：grid = [[1,2,3],[4,5,6]]
输出：12
 

提示：

m == grid.length
n == grid[i].length
1 <= m, n <= 200
0 <= grid[i][j] <= 200
 */
/**
 * dp[i][j]=dp[i-1][j-1]+Math.min(dp[i-1][j],dp[i][j-1])
 * 当然还要考虑左边界和上边界的情况
 */
const minPathSum=(grids)=>{
  const m=grids.length;
  const n=grids[0].length;
  let dp=[]
  for(let i=0;i<m;i++){
    dp[i]=[]
    for(let j=0;j<n;j++){
        dp[i][j]=0
    }
  }
  for(let i=0;i<m;i++){
    for(let j=0;j<n;j++){
      if(i==0&&j==0){
        dp[i][j]=grids[i][j]
      }else if(i==0){
        dp[i][j]=dp[i][j-1]+grids[i][j]
      }else if(j==0){
        dp[i][j]=dp[i-1][j]+grids[i][j]
      }else{
        dp[i][j]=Math.min(dp[i-1][j],dp[i][j-1])+grids[i][j]  
      }
    }
  }
  return dp[m-1][n-1]
}