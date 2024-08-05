/**
 * 35. 搜索插入位置
简单
相关标签
相关企业
给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 O(log n) 的算法。

示例 1:

输入: nums = [1,3,5,6], target = 5
输出: 2
示例 2:

输入: nums = [1,3,5,6], target = 2
输出: 1
示例 3:

输入: nums = [1,3,5,6], target = 7
输出: 4
 */
const searchInsert=(nums,target)=>{
    let left=0;
    let right=nums.length-1;
    let mid
    while(left<=right){
      // mid=Math.floor((left+right)/2);
      mid=(left+right)>>1//小技巧，位运算会快很多，并且自动向下取整
      if(nums[mid]<target){
        left=mid+1
      }else if(nums[mid]>target){
        right=mid-1
      }else{
        return mid
      }
    }
    return left
}

// https://github.com/vltown/leetcode/blob/master/problems/0704.%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE.md
// 这里几个注意点，二分法的两种写法，看区间，先记住一种
//对于上面这种定义right=nums.length-1;且while(left<=right),说明查找区间是[left,right]，
// 这种写法意味着left===right这个点是有意义的
//这种情况迭代时right=mid-1,因为mid已经确定不是了，不用包含在后面的闭区间里面

//另一种写法就是右开区间[left,right)   while(left<right)   一开始right=nums.length,因为取不到该右边界值
//迭代时right=mid;