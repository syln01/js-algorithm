/**
 * 416. 分割等和子集
中等
相关标签
相关企业
给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，
使得两个子集的元素和相等。

 

示例 1：

输入：nums = [1,5,11,5]
输出：true
解释：数组可以分割成 [1, 5, 5] 和 [11] 。
示例 2：
0p"{P输"入：nums = [1,2,3,5]
输出：false
解释：数组不能分割成两个元素和相等的子集。
 

提示：

1 <= nums.length <= 200
1 <= nums[i] <= 100
 */

const canPartition1=nums=>{
  if(nums.length===1)return false;
  nums.sort((a,b)=>a-b)
  let sum=0
  for(let i=0;i<nums.length;i++){
    sum+=nums[i]
  }
  let left=0
      right=0
      // ans=false
  let currentSum=nums[0]

  while(left<=right&&right<nums.length){
      if(2*currentSum>sum){
        currentSum-=nums[left]
        left++;
      }else if(2*currentSum<sum){
        currentSum+=nums[right+1]
        right++
      }else{
        return true
      }
  }
  return false
}
// console.log(canPartition([14,9,8,4,3,2]))
//以上尝试用用滑动窗口并不能通过所有 用例，因为符合条件的解并不一定按原数组的升序连续，
// 比如上面用例的解是14,2,4

//尝试先用dfs,对于数组的每个元素，都有选或者不选两种选择
const canPartition2=nums=>{
  if(nums.length===1)return false;
  let sum=0
  for(let i=0;i<nums.length;i++){
    sum+=nums[i]
  }
 if(sum%2===1)return false;
 let currentSum=0
  const dfs=index=>{
    if(index>=nums.length){
      //当前组合已经选到结尾了
      return false;
    }
    if(2*currentSum>sum){
      //当前组合已经超过一半，后面再选已经没有意义
      return false;
    }else if(2*currentSum===sum){
      return true;
    }else{
      //还没到总和一半，继续做选择
      currentSum+=nums[index];
      const choose=dfs(index+1);
      currentSum-=nums[index];//回溯状态
      if(choose)return true

      //不选
      const notChoose=dfs(index+1)
      return notChoose
      // return choose||notChoose;//只要有一条路符合条件就行
    }

  }
  return dfs(0)
}
//上面的解法行倒是行，但是太暴力，超时了
//优化要么是记忆化搜索
//要么是动态规划，因为实际上dfs过程中，很多子组合被重复求和了
//记忆化搜索
const canPartition3 = (nums) => {
  let sum = 0;
  for (const n of nums) { // 求数组和
      sum += n;
  }
  if (sum % 2 != 0) return false; // 如果 sum 为奇数，直接返回 false
  const memo = new Map();
  const target = sum / 2; // 目标和

  const dfs = (curSum, i) => {    // curSum是当前累加和，i是指针
      if (i == nums.length || curSum > target) { // 递归的出口
          return false;
      }
      if (curSum == target) {                    // 递归的出口
          return true;
      }
      const key = curSum + '&' + i;   // 描述一个问题的key
      if (memo.has(key)) {            // 如果memo中有对应的缓存值，直接使用
          return memo.get(key);
      }
      const res = dfs(curSum + nums[i], i + 1) || dfs(curSum, i + 1);
      memo.set(key, res);  // 计算的结果存入memo
      return res;
  };

  return dfs(0, 0); // 递归的入口，当前和为0，指针为0
};



// 分类解题模板
// 背包问题大体的解题模板是两层循环，分别遍历物品nums和背包容量target，然后写转移方程，
// 根据背包的分类我们确定物品和容量遍历的先后顺序，根据问题的分类我们确定状态转移方程的写法

// 首先是背包分类的模板：
// 1、0/1背包：外循环nums,内循环target,target倒序且target>=nums[i];
// 2、完全背包：外循环nums,内循环target,target正序且target>=nums[i];
// 3、组合背包：外循环target,内循环nums,target正序且target>=nums[i];
// 4、分组背包：这个比较特殊，需要三重循环：外循环背包bags,内部两层循环根据题目的要求转化为1,2,3三种背包类型的模板

// 然后是问题分类的模板：
// 1、最值问题: dp[i] = max/min(dp[i], dp[i-nums]+1)或dp[i] = max/min(dp[i], dp[i-num]+nums);
// 2、存在问题(bool)：dp[i]=dp[i]||dp[i-num];
// 3、组合问题：dp[i]+=dp[i-num];

//设置dp[i][j]为前i个数中能否选出若干个数使得其和为j,
//对于第i个数，如果如果不选，则和dp[i-1][j]相同；
//如果选择，则意味着前i-1个数中要能组合出j-nums[i]
//所以dp[i][j]=dp[i-1][j]||dp[i-1][j-nums[i]]
const canPartition5=nums=>{
  if(nums.length===1)return false;
  let sum=0
  for(let i=0;i<nums.length;i++){
    sum+=nums[i]
  }
 if(sum%2===1)return false;
 sum/=2
  let dp=[[true]];//即初始化dp[0][0]为true,不选就能达到0的状态
  for(let i=1;i<nums.length;i++){
      dp[i]=[]
      for(let j=0;j<=sum;j++){
        dp[i][j]=dp[i-1][j]||dp[i-1][j-nums[i]]
        if(j===sum&&dp[i][j])return true
      }
  }
  return false
  
}
// console.log(canPartition([1,5,11,5]))

//再进一步优化，每个i只和i-1有关，所以二维数组可以转化为一维
//dp[j]=dp[j]||dp[j-nums[i]]，注意这里等号后面的都是上一轮遍历中还未被更新的状态
//就是说当前索引处能不能组合出j全看上一个索引能不能组合出j或者j-nums[i]
//然而，如果直接把上面的二维改成一维，会有问题
// for (int i = 1; i <= n; i++){ 	             //为了下标对应，实际nums[i]应取nums[i - 1]
//   for (int j = nums[i]; j <= m; j++){
//        f[j] = f[j] | f[j - nums[i]];   
//   }
// }    
//我们想要的效果实际后面的两个f都是上一轮还未被更新的值，但是j-nums[i]一定会先与j被遍历更新，它不是上一轮的值而是本轮的值
//解决办法就是反过来遍历

const canPartition=nums=>{
  if(nums.length===1)return false;
  let sum=0
  for(let i=0;i<nums.length;i++){
    sum+=nums[i]
  }
 if(sum%2===1)return false;
 sum/=2
 let dp=[true]//dp[i]代表当前遍历的索引能否组合出和为i
 for(let i=0;i<nums.length;i++){
    for(let j=sum;j>=1;j--){
        dp[j]=dp[j]||dp[j-nums[i]]
    }
 }
 return !!dp[sum]//转bool,因为没有进行初始化，有一些undefined,应该一开始除了0位都是false;
}