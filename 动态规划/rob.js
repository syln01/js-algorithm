/**
 * 
198. 打家劫舍
中等
相关标签
相关企业
你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，
影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，
如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，
一夜之内能够偷窃到的最高金额。

 

示例 1：

输入：[1,2,3,1]
输出：4
解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。
示例 2：

输入：[2,7,9,3,1]
输出：12
解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
     偷窃到的最高金额 = 2 + 9 + 1 = 12 。
 

提示：

1 <= nums.length <= 100
0 <= nums[i] <= 400
 */
/**
 *思路：动态规划，对于k>2个房屋,可以选择偷第k个，也就是不能投k-1个，总收入=dp[k-2]+nums[k]
 或者也可选择不偷k个，那么第k间房子的加入其实无影响，dp[k]=dp[k-1]
 这两者中取较高的dp[k]=Math.max(dp[k-2]+nums[k],dp[k-1])
 边界就是为1或2的时候
 */
const rob=nums=>{
  let dp=[];
  const k=nums.length;
  dp[0]=nums[0]
  if(k>=2){
    dp[1]=Math.max(nums[0],nums[1])
    for(let i=2;i<k;i++){
      dp[i]=Math.max(dp[i-2]+nums[i],dp[i-1])
    }
  }
 return dp[k-1]
}