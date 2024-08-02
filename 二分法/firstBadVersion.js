/**
 * 278. 第一个错误的版本
简单
相关标签
相关企业
你是产品经理，目前正在带领一个团队开发新的产品。不幸的是，你的产品的最新版本没有通过质量检测。由于每个版本都是基于之前的版本开发的，所以错误的版本之后的所有版本都是错的。

假设你有 n 个版本 [1, 2, ..., n]，你想找出导致之后所有版本出错的第一个错误的版本。

你可以通过调用 bool isBadVersion(version) 接口来判断版本号 version 是否在单元测试中出错。实现一个函数来查找第一个错误的版本。你应该尽量减少对调用 API 的次数。

 
示例 1：

输入：n = 5, bad = 4
输出：4
解释：
调用 isBadVersion(3) -> false 
调用 isBadVersion(5) -> true 
调用 isBadVersion(4) -> true
所以，4 是第一个错误的版本。
示例 2：

输入：n = 1, bad = 1
输出：1
 

提示：

1 <= bad <= n <= 231 - 1
 */
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

const isBadVersion=(num)=>{
  if(num>=2){
    return true
  }else{
    return false
  }
}
/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
  let left=1;
  let right=n
  let mid
  while(left<right){//这里如果时left<=right,那么在相等之后还会循环一次
     mid=Math.floor((left+right)/2);//这里如果是java,那么他会自动向下取整int,但是js弱类型需要手动向下取整
     //其他语言中，要用left+(right-left)/2;因为直接两个相加会整型溢出
    if(isBadVersion(mid)){
      //mid不对，说明是mid或者mid之前
      right=mid
    }else{//mid是对的，第一个出错节点在mid之后
      left=mid+1
    }
  }
  //此时left==right,区间收缩为一个点
  return left;
};
}

  const solution=(n)=> {
      let left=1;
      let right=n
      let mid
      while(left<right){
         mid=Math.floor((left+right)/2)
        if(isBadVersion(mid)){
          right=mid
        }else{
          left=mid+1
        }
      }
      return left;
  };

console.log(solution(2))