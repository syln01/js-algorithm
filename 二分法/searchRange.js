/**
给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。
如果数组中不存在目标值 target，返回 [-1, -1]。
你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。
示例 1：

输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
示例 2：

输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]
示例 3：

输入：nums = [], target = 0
输出：[-1,-1]
 

提示：

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums 是一个非递减数组
-109 <= target <= 109
 */

const searchRange=(nums,target)=>{
  let left=0;
  let right=nums.length-1;
  let first=-1;
  let last=-1;
  while(left<=right){
    mid=(left+right)>>1;
    if(nums[mid]===target){
      first=mid;
      right=mid-1;//关键点，找到第一个数之后，并不直接返回，而是向左边缩小边界，如果再找到target,就更新first
    }else if(nums[mid]>target){
      right=mid-1
    }else{
      left=mid+1
    }
  }
  left=0;
  right=nums.length-1;
  while(left<=right){
    mid=(left+right)>>1
    if(nums[mid]===target){
      last=mid;
      left=mid+1//关键点，找到第一个数之后，再向右缩小边界，再找到就再更新last;
    }else if(nums[mid]>target){
      right=mid-1
    }else{
      left=mid+1
    }
  }
  return [first,last]
}