/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

 

示例 1：

输入：n = 2
输出：2
解释：有两种方法可以爬到楼顶。
1. 1 阶 + 1 阶
2. 2 阶
示例 2：

输入：n = 3
输出：3
解释：有三种方法可以爬到楼顶。
1. 1 阶 + 1 阶 + 1 阶
2. 1 阶 + 2 阶
3. 2 阶 + 1 阶
 

提示：

1 <= n <= 45
 */
/**
 * f(x)=f(x-1)+f(x-2)
 * x级台阶可以从x-1级台阶和x-2级台阶跨越而来
 * 这其实是个斐波那契数列
 */
const climbStairs=(n)=>{
  let dp=[];
  for(let i=0;i<n;i++){
    dp[i]=0;
  }
  dp[0]=1
  dp[1]=2;
  for(let i=2;i<n;i++){
    dp[i]=dp[i-1]+dp[i-2]
  }
  return dp[i-1]
}