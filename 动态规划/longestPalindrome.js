/**
 * 5. 最长回文子串
已解答
中等
相关标签
相关企业
提示
给你一个字符串 s，找到 s 中最长的 
回文子串
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
 * 定义dp[i][j]表示字符串i到j是否为回文串
 * 转移方程dp[i][j]=dp[i+1][j-1]&&s[i]===s[j]
 * 边界情况，单个字符必然是回文串，两个相邻的相同字符是回文串
 * 由于转移方程是由较短子串向较长子串转移，要注意遍历顺序
 * 
 */
const longestPalindrome1=s=>{
  if(s.length===0)return 0;
  const cArr=s.split('');
  let dp=[]
  let maxLen=1
  let maxStr=cArr[0]
  for(let i=cArr.length-1;i>=0;i--){//一开始试了从0开始遍历，但是会报错
    dp[i]=[]
    for(let j=i;j<cArr.length;j++){
      if(i===j){
        dp[i][j]=true
      }else if(j-i===1&&cArr[i]===cArr[j]){
        dp[i][j]=true;
        // maxLen=Math.max(2,maxLen)
      }else{
        dp[i][j]=dp[i+1][j-1]&&cArr[i]===cArr[j]
      }
      if(dp[i][j]&&j-i+1>maxLen){
        // maxLen=Math.max(maxLen,j-i+1)
        maxLen=j-i+1;
        maxStr=s.slice(i,j+1)
      }
    }
  }
  return maxStr
}

// 优化一下
const longestPalindrome = (s) => {
  if (s.length === 0) return '';
  const n = s.length;
  let dp = Array.from({ length: n }, () => Array(n).fill(false));
  let maxLen = 1;
  let maxStr = s[0];

  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      if (s[i] === s[j] && (j - i < 3 || dp[i + 1][j - 1])) {
        dp[i][j] = true;
        if (j - i + 1 > maxLen) {
          maxLen = j - i + 1;
          maxStr = s.slice(i, j + 1);
        }
      }
    }
  }

  return maxStr;
};

