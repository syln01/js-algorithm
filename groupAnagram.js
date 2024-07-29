/**
 * 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

字母异位词 是由重新排列源单词的所有字母得到的一个新单词。

 

示例 1:

输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
示例 2:

输入: strs = [""]
输出: [[""]]
示例 3:

输入: strs = ["a"]
输出: [["a"]]
 

提示：

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] 仅包含小写字母
 */
const groupAnagrams=strs=>{
  let map={};
  for(let str of strs){
      const sortedStr=str.split("").sort().join("");
      map[sortedStr]?map[sortedStr].push(str):map[sortedStr]=[str]
      //map.sortedStr对于key是变量的情况是不能用这种，只能用[],因为用点会认为是找"sortedStr"这个字符串键
  }
  return Object.values(map)
}
console.table(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))

var groupAnagrams1 = function(strs) {
  const map = new Object();
  for (let s of strs) {
      const count = new Array(26).fill(0);
      for (let c of s) {
          count[c.charCodeAt() - 'a'.charCodeAt()]++;
      }
      //js中的键会被转化字符串，所以这里map的键实际上是count数组join之后的字符串
      map[count] ? map[count].push(s) : map[count] = [s];
  }
  // console.log(map)
  return Object.values(map);
};
console.table(groupAnagrams(["bdddddddddd","bbbbbbbbbbc"]))
