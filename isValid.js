/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
每个右括号都有一个对应的相同类型的左括号。
 

示例 1：

输入：s = "()"
输出：true
示例 2：

输入：s = "()[]{}"
输出：true
示例 3：

输入：s = "(]"
输出：false
 

提示：

1 <= s.length <= 104
s 仅由括号 '()[]{}' 组成
 */
const isValid=(s)=>{
  if(s.length%2===1){
    return false;
  }//奇数一定是不匹配的，减少一些计算时间
  let stack=[];
  for(let i=0;i<s.length;i++){
    const currentChar=s.charAt(i)
      if(stack.length===0||!isPair(stack[stack.length-1],currentChar)){
        stack.push(currentChar)
      }else{
        stack.pop();
      }
  }
  if(stack.length){
    return false;
  }
  return true
}
//这里逻辑是检索右括号是否与栈中的左括号匹配
const isPair=(start,end)=>{
  const map={
    '{':'}',
    '[':']',
    '(':')'
  }
  if(map[start]===end){
    return true
  }else{
    return false
  }
}
console.log(isValid("()"))