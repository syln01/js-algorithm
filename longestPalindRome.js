/**
 * 给你一个字符串 s，找到 s 中最长的 
回文
 
子串
。

 

示例 1：

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
示例 2：

输入：s = "cbbd"
输出："bb"
 */
/**
 * 
 * @param {string} s 
 * @return {string}
 */
/**
 * 
 * 回文类型一般都是首先考虑动态规划，
 * 回归方程dp[i+1][j+1]=dp[i][j]&&(s.charAt(i)==s.charAt(j))
 * 同时要考虑到，单个字符一定是回文串
 */
const longestPalindrome=(s)=>{
  const len=s.length;
  if(len<=1){
    return s;
  }
  let maxLen=0;
  let res='';
  let dp=[];
  for(let i=0;i<len;i++){
    dp[i]=[]
    for(let j=0;j<len;j++){
      dp[i][j]=false
    }
  }
  for(let i=len-1;i>=0;i--){
    for(let j=i;j<len;j++){
      //从j=i开始是为了让单个字符的情况为dp值为true;
      //也可以造构造数组是将dp[i][i]设置为true,从j=i+1开始
      if(s.charAt(i)==s.charAt(j)&&(j-i<=1||dp[i+1][j-1])){
        dp[i][j]=true;
        if(j-i+1>maxLen){
          maxLen=j-i+1;
          res=s.slice(i,j+1)
        }
      }
    }
  }
  return res
}