/**
 * 139. 单词拆分
中等
相关标签
相关企业
给你一个字符串 s 和一个字符串列表 wordDict 作为字典。如果可以利用字典中出现的一个或多个单词拼接出 s 
则返回 true。

注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。

 

示例 1：

输入: s = "leetcode", wordDict = ["leet", "code"]
输出: true
解释: 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。
示例 2：

输入: s = "applepenapple", wordDict = ["apple", "pen"]
输出: true
解释: 返回 true 因为 "applepenapple" 可以由 "apple" "pen" "apple" 拼接成。
     注意，你可以重复使用字典中的单词。
示例 3：

输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
输出: false
 

提示：

1 <= s.length <= 300
1 <= wordDict.length <= 1000
1 <= wordDict[i].length <= 20
s 和 wordDict[i] 仅由小写英文字母组成
wordDict 中的所有字符串 互不相同
 */
/**
 * 定义dp数组dp[i]表示s的前i个字符用字典中单词是否能拼出
 * dp[i]=dp[k]&&(workDict.findIndex(e=>e==(s.slice(k,i)))!=-1)
 * 注意这里不是到结尾,因为每个dp求得是前n个，不是截取到结尾
 */
// 0123
// 1234
const wordBreak=(s,wordDict)=>{
  //用set.has比array.includes快很多，因为set内部是哈希表，查找时间复杂度是o(1),array是o(n)
  let wordSet=new Set(wordDict)
  let dp=[];
  const n=s.length;
  dp[0]=true
  for(let i=1;i<=n;i++){
    for(let j=i-1;j>=0;j--){
      // console.log(j,dp[j],s.slice(i-j-1,i))
      dp[i]=dp[j]&&(wordSet.has(s.slice(j,i)))
      if(dp[i])break
    }
  }
  return dp[n]
}
console.log(wordBreak("leetcode",["leet", "code"]))

const wordBreak1 = (s, wordDict) => {
  const wordSet = new Set(wordDict);
  const n = s.length;
  const dp = Array(n + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (dp[j] && wordSet.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[n];
};