/**
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，
 * 同时还满足 nums[i] + nums[j] + nums[k] == 0 。请

你返回所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

 

 

示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
解释：
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
注意，输出的顺序和三元组的顺序并不重要。
示例 2：

输入：nums = [0,1,1]
输出：[]
解释：唯一可能的三元组和不为 0 。
示例 3：

输入：nums = [0,0,0]
输出：[[0,0,0]]
解释：唯一可能的三元组和为 0 。
 

提示：

3 <= nums.length <= 3000
-105 <= nums[i] <= 105
 */
const threeSum=(nums)=>{
  nums.sort((a,b)=>a-b);//这里sort传参不能为空，否则会被当成字符串排序
  let res=[];
  for(let i=0;i<nums.length;i++){
    if(nums[i]>0)break;//因为是升序排列，所以如果当前大于0，后续所有i都不用看了
    if(i>0&&nums[i]==nums[i-1])continue;//去重
    let left=i+1;
    let right=nums.length-1;
    while(left<right){
      const sum=nums[i]+nums[left]+nums[right]
      if(sum===0){
        res.push([nums[i],nums[left],nums[right]])
        while(left<right&&nums[left]==nums[left+1])left++;//去重, 注意是left+1，不要写成left++
        while(left<right&&nums[right]==nums[right-1])right--;//去重
        left++;
        right--;
      }else if(sum<0){
        left++;
      }else{
        right--;
      }
    }
  }
  return res;
}
console.log(threeSum([-1,0,1,2,-1,-4]))