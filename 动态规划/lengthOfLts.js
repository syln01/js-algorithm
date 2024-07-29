/**
 * 300. 最长递增子序列
中等
相关标签
相关企业
给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的
子序列
。

 
示例 1：

输入：nums = [10,9,2,5,3,7,101,18]
输出：4
解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
示例 2：

输入：nums = [0,1,0,3,2,3]
输出：4
示例 3：

输入：nums = [7,7,7,7,7,7,7]
输出：1
 

提示：

1 <= nums.length <= 2500
-104 <= nums[i] <= 104
 */
/**定义dp[i]为以nums[i]为序列结尾的最大序列长度
 * 对于此转移方程，并不能由i-1推到i,而是在dp[0]-dp[i-1]转化之后求最优解，类似于换零钱那一题
 * dp[i]=Math.max(dp[j]+1)其中(0<=j<i且nums[j]<nums[j])
 * 同时注意，这里dp[i]定义的是以nums[i]结尾，不一定是最大值，所以还要更新最大值
 */
const lengthOfLIS=nums=>{
  if(nums.length==0){
    return 0
  }
  let dp=[]
  let ans=1
  // dp[0]=1;
  for(let i=0;i<nums.length;i++){
    dp[i]=1
    for(let j=0;j<i;j++){
      if(nums[i]>nums[j]){
        dp[i]=Math.max(dp[i],dp[j]+1);
      }
    }
    ans=Math.max(ans,dp[i])
  }
  return ans
}