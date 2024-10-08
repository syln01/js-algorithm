/**
 * 题目描述

279. 完全平方数
中等
相关标签
相关企业
给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。

完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。
例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。

 

示例 1：

输入：n = 12
输出：3 
解释：12 = 4 + 4 + 4
示例 2：

输入：n = 13
输出：2
解释：13 = 4 + 9
 
提示：

1 <= n <= 104
 */
/**
 * 直白的理解，先找到n前面最大的平方数k*k,那么就还剩n-k*k,所以这种情况解就是dp[n-k*k]+1
 * 但是这种不一定是最小解，如12=9+1+1+1,12=4+4+4,所以我们需要遍历小于n的平方数，1*1,2*2，。。。更新最小值
 * dp[i]=Math.min(dp[i],dp[i-k*k]+1)
 */
const numSquares=n=>{
  let dp=[]
  dp[0]=0;//初始化边界值
  for(let i=1;i<=n;i++){
    //求解dp数组
    dp[i]=Number.MAX_SAFE_INTEGER;//设置一个很大的值用于更新最小值，其实用i也可以，因为最小值不会大于i
    for(let j=1;j*j<=i;j++){
      dp[i]=Math.min(dp[i-j*j]+1,dp[i])
    }
  }
  return dp[n]
}
console.log(numSquares(12))