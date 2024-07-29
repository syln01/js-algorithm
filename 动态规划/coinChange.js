/**
 * 322. 零钱兑换
给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

你可以认为每种硬币的数量是无限的。

示例 1：

输入：coins = [1, 2, 5], amount = 11
输出：3 
解释：11 = 5 + 5 + 1
示例 2：

输入：coins = [2], amount = 3
输出：-1
示例 3：

输入：coins = [1], amount = 0
输出：0
 

17
5+5+5
提示：

1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104
 */
/**
 * dp[i]=Math.min(dp[i],dp[i-coins[j]]+1)
 */
/**
 * 
 * @param {Array} coins 
 * @param {number} amount 
 * @returns {number}
 */
const coinChange=(coins,amount)=>{
  coins.sort((a,b)=>a-b)//注意还是不能只写一个sort(),否则会按字符串顺序排列
  let dp=[];
  dp[0]=0
  for(let i=1;i<=amount;i++){
    dp[i]=Number.MAX_SAFE_INTEGER;
    // if(i%83==0)debugger
    for(let j=0;j < coins.length&&coins[j]<=i;j++){//注意前提是要sort,否则遇到大数直接结束循环了
      dp[i]=Math.min(dp[i-coins[j]]+1,dp[i])
    }
    // if(i%83==0)console.log(i,dp[i])
  }
  return dp[amount]>amount?-1:dp[amount]
}
coinChange([474,83,404,3],264)