/**
 * 994. 腐烂的橘子
在给定的 m x n 网格 grid 中，每个单元格可以有以下三个值之一：

值 0 代表空单元格；
值 1 代表新鲜橘子；
值 2 代表腐烂的橘子。
每分钟，腐烂的橘子 周围 4 个方向上相邻 的新鲜橘子都会腐烂。

返回 直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 -1 。

示例 1：
输入：grid = [[2,1,1],[1,1,0],[0,1,1]]
输出：4
示例 2：

输入：grid = [[2,1,1],[0,1,1],[1,0,1]]
输出：-1
解释：左下角的橘子（第 2 行， 第 0 列）永远不会腐烂，因为腐烂只会发生在 4 个方向上。
示例 3：

输入：grid = [[0,2]]
输出：0
解释：因为 0 分钟时已经没有新鲜橘子了，所以答案就是 0 。
 

提示：

m == grid.length
n == grid[i].length
1 <= m, n <= 10
grid[i][j] 仅为 0、1 或 2
 */
/**
 * BFS需要用到队列，伪代码如下
 * while queue 非空:
	node = queue.pop()
    for node 的所有相邻结点 m:
        if m 未访问过:
            queue.push(m)
 */
const orangesRotting=grid=>{
  let minute=0
  let count=0
  let queue=[]
  const m=grid.length;
  const n=grid[0].length
  for(let i=0;i<grid.length;i++){
    for(let j=0;j<grid[0].length;j++){
        if(grid[i][j]===1){
          count++//记录初始新鲜橘子的个数
        }else if(grid[i][j]===2){
          queue.push([i,j])//将坏掉的橘子放入队列作为起点
        }                      
    }
  }
  if(count===0){
    return 0
  }
  while(queue.length!==0){
    console.table(queue)
    console.table(grid)
    const len=queue.length
    let isRot=false
    // for(let i=0;i<queue.length;i++){  //队列长度是变化的，要先记录一下
    for(let i=0;i<len;i++){
      // const badPos=queue.pop();
      const [x,y]=queue.shift()
      // pop是从队尾移除，那么就是先进后出，违背了队列先进先出的原则
      if(x+1<m&&grid[x+1][y]===1){
        queue.push([x+1,y])
        grid[x+1][y]=2
        isRot=true
        count--
      }
      if(x-1>=0&&grid[x-1][y]===1){
        queue.push([x-1,y])
        grid[x-1][y]=2
        isRot=true
        count--
      }
      if(y+1<n&&grid[x][y+1]===1){
        queue.push([x,y+1])
        grid[x][y+1]=2
        isRot=true
        count--
      }
      if(y-1>=0&&grid[x][y-1]===1){
        queue.push([x,y-1])
        grid[x][y-1]=2
        isRot=true
        count--
      }
    }
    if(isRot)minute++
  }
  if(count>0)return -1
  return minute
}
console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]))