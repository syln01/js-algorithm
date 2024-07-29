/**
 * 给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号
子串
的长度。

 

示例 1：

输入：s = "(()"
输出：2
解释：最长有效括号子串是 "()"
示例 2：

输入：s = ")()())"
输出：4
解释：最长有效括号子串是 "()()"
示例 3：

输入：s = ""
输出：0
 

提示：

0 <= s.length <= 3 * 104
s[i] 为 '(' 或 ')'
 */
/**
 * 思路：查找过程中，右括号数大于左括号时说明此串已经不合法，结果不包含此串，需要从此串之后另行寻找，将left,right置为0
 * 但是这种会漏掉一种情况（（（）或"()(()"等这种左括号始终大于右括号的找不出来
 * 这种情况就需要从右向左再次循环查找一遍
 */
const longestValidParentheses=(s)=>{
    let left=0;
        right=0;
        maxLen=0;
    for(let i=0;i<s.length;i++){
      if(s.charAt(i)==='('){
        left++
      }else{
        right++
      }
      if(right>left){
        // 此串已经不合法，结果不包含此串，需要从此串之后另行寻找，将left,right置为0
        left=0;
        right=0
      }else if(right==left){
        maxLen=Math.max(maxLen,2*right)
      }
    }

    //此时有可能会漏掉左括号始终大于右括号的情况，可以反向循环一遍
    left= right=0;
    for(i=s.length-1;i>=0;i--){
      if(s.charAt(i)=='('){
        left++
      }else{
        right++
      }
      if(left>right){
        //此串已经非法
        left=right=0
      }else if(left==right){
        maxLen=Math.max(maxLen,2*right)
      }
    }
    return maxLen
}