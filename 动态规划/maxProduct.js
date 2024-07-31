/**
 * 
152. 乘积最大子数组
给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续
子数组
（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

测试用例的答案是一个 32-位 整数。
示例 1:

输入: nums = [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。
示例 2:

输入: nums = [-2,0,-1]
输出: 0
解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
 
提示:
1 <= nums.length <= 2 * 104
-10 <= nums[i] <= 10 
nums 的任何前缀或后缀的乘积都 保证 是一个 32-位 整数
 */
/**
 * 本题不管是用哪一种方法，都是要分类讨论
 * 如果用动态规划，定义dp[i]表示以第i个元素结尾的最大乘积，由于这一题要求的连续序列，则i-1和i之间存在转移关系
 * 对于dp[i],如果nums[i]为正,有可能前面i-1有一个最大正数乘积，那么乘以num[i]毫无疑问是最大的，如果i-1乘积只有负数或0，则单独nums[i](其实就是两者之间取最大)
 * 如果nums[i]为负，则有可能前面有一个最小负数（绝对值较大），那么最小乘积乘以nums[i]即可，如果i-1乘积只有正数，则单独nums[i](还是取最大了)
 * 所以其实还要维护一个单独dpmin[]以应对可能的负数，三者取最大、最小即可
 * 由于i只与i-1和当前值有关，所以其实也不用维护数组，维护两个最大最小变量即可
 */
const maxProduct=(nums)=>{
  let ans=nums[0]
  let max=nums[0]//维护一个代表前一个dp最大乘积的变量
  let min=nums[0]//维护一个代表前一个dp最小乘积的变量
  for(let i=1;i<nums.length;i++){
    const tempMax=max
    max=Math.max(max*nums[i],min*nums[i],nums[i])
    min=Math.min(min*nums[i],tempMax*nums[i],nums[i])//不能直接这么写，要用变量保存更新之前的max值
    ans=Math.max(ans,max)
  }
  return ans
}
// maxProduct([-4,-3,-2])
/**
 * 或者可以直接从数学上考虑
 * 如果是全是正数或者偶数个负数，全部相乘即可
 * 如果奇数个负数，那么答案是在从左到右相乘直到最后一个负数之前，或者从右向左直到最后一个负数之前
 * 如果有0，那么从0之后那一格就重新计算相乘，（但还是要比较大小，因为可能最大就是0）
 * 换句话说，最后结果只可能是前缀或者后缀或者从0开始
 * 实际操作就是左右各循环相乘一遍，遇到0之后重新计算，最大值一定会出现在这两个循环过程中
 */
const maxProduct1=nums=>{
  const n=nums.length
  let leftMult=nums[0];
  let rightMult=nums[n-1]
  let ans=Math.max(leftMult,rightMult)
  for(let i=1;i<nums.length;i++){
      leftMult=nums[i-1]===0?nums[i]:leftMult*nums[i]
      rightMult=nums[n-i]===0?nums[n-i-1]:rightMult*nums[n-i-1]
      ans=Math.max(ans,leftMult,rightMult)
  }
  return ans
}
console.log(maxProduct1([-1,-2,-3,0]))