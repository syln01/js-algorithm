/**
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
示例 1：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
示例 2：

输入：nums = [0,1]
输出：[[0,1],[1,0]]
示例 3：

输入：nums = [1]
输出：[[1]]
 

提示：
  
1 <= nums.length <= 6
-10 <= nums[i] <= 10
nums 中的所有整数 互不相同
 */
const permute = nums => {
  const len = nums.length
  let ans = []
  const backtrack = start => {
    //以start为界，start左侧是交换过的，右侧是没交换过的
    if (start == nums.length) {
      ans.push([...nums]) //这里必须是加入拷贝，直接push nums所有元素都是一样的
      //虽然只是浅拷贝，但是nums只有简单数据类型，已经足够了
    }
    for (let i = start; i < len; i++) {
      [nums[start], nums[i]] = [nums[i], nums[start]]; //交换元素
      backtrack(start + 1); //递归调用
      [nums[start], nums[i]] = [nums[i], nums[start]]; //还原数组,(也就是回溯里面的回到上一步，选择另一个分支)
      // console.log(nums,i)  
    }
  }
  backtrack(0); 
  return ans
}
permute([1,2,3])
// const permute2 = nums => {
//   const len = nums.length
//   let ans = []
//   const backtrack = (start,output) => {
//     //以start为界，start左侧是交换过的，右侧是没交换过的
//     if (start == len) {
//       ans.push([...output]) //这里必须是加入拷贝，直接push nums所有元素都是一样的
//       //虽然只是浅拷贝，但是nums只有简单数据类型，已经足够了
//     } 
//     for (let i = start; i < len; i++) {
//       [output[start], output[i]] = [output[i], output[start]]; //交换元素
//       backtrack(start + 1,output); //递归调用
//       [output[start], output[i]] = [output[i], output[start]]; //交换元素
//     }
//   }
//   backtrack(0,[...nums]); 
//   return ans
// }

function permute3(nums) {
  const results = []

  function backtrack(path, options) {
    console.log(path, options)
    if (options.length === 0) {
      results.push(path)
      return
    }

    for (let i = 0; i < options.length; i++) {
      // const newOptions = options.slice(0, i).concat(options.slice(i + 1));
      // backtrack(path.concat(options[i]), newOptions);
      //上面这种写法是为了去除options中的i号元素，且不改变原数组，但是易读性不是很好，他等同于下面的filter
      //不过下面这种写法效率稍微低点
      const currentNum = options[i]
      const newOptions = options.filter((v, index) => index !== i)
      backtrack(path.concat(currentNum), newOptions)
      //注意，无论是那种方法，关键都是不改变原数组，因为其中隐含了回溯的撤销操作
    }
  }

  backtrack([], nums)
  return results
}
