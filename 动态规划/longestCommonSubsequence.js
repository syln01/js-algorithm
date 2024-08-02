/**
 * 1143. 最长公共子序列
中等
相关标签
相关企业
提示
给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。

一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。

例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。

 

示例 1：

输入：text1 = "abcde", text2 = "ace" 
输出：3  
解释：最长公共子序列是 "ace" ，它的长度为 3 。
示例 2：

输入：text1 = "abc", text2 = "abc"
输出：3
解释：最长公共子序列是 "abc" ，它的长度为 3 。
示例 3：

输入：text1 = "abc", text2 = "def"
输出：0
解释：两个字符串没有公共子序列，返回 0 。
 

提示：

1 <= text1.length, text2.length <= 1000
text1 和 text2 仅由小写英文字符组成。
 */
/**
 * 定义dp[i][j]为s1和s2之间公共子序列
 * 转移方程：
 * 如果s1[i]===s2[j],则dp[i][j]=dp[i-1][j-1]+1
 * 如果s1[i]!==s2[j],则dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1])
 */
// abcdefg  abxyz
// abcdef   abxyze
// abcdefg  abxyze
//关于不等于的情况，无论是向s1还是s2的末尾添加一个元素，都有两种可能:
//公共长度+1或者不变，从i-1添加或者j-1添加转化而来
//疑问在于，会不会存在dp[i][j]=3;而dp[i-1][j]和dp[i][j-1]都等于2的情况呢
//不会，简单推导一下，这种情况其实就是i和j位置字符相同；
// 初始化边界状态
//如果i===0||j===0,则为0，//注意这里0指的是空串，dp里的i\j指第几位而不是索引


const longestCommonSubsequence=(s1,s2)=>{
    const m=s1.length;
    const n=s2.length;
    let dp=Array.from(new Array(m+1),()=>new Array(n+1).fill(0));
    for(let i=1;i<=m;i++){
      for(let j=1;j<=n;j++){
        if(s1.charAt(i-1)===s2.charAt(j-1)){//注意这里需要索引，要减一
          dp[i][j]=dp[i-1][j-1]+1
        }else{
          dp[i][j]=Math.max(dp[i][j-1],dp[i-1][j])
        }
      }
    }
    return dp[m][n]
}