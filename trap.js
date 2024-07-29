/**\
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

 

示例 1：



输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
输出：6
解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
示例 2：

输入：height = [4,2,0,3,2,5]
输出：9
 
 */
/**
 * 按列计算，每一列能够接到的雨水等于左最高墙和右最高墙的较低的一个减去当前列的高度
 * 关键在于左右最高值，如果每次都循环求一边最高值，是会有重复计算，会超时
 * 从前往后遍历找左最高值时,lMax[i]=Math.max(lMax[i-1],height[i])
 * 因为需要从前往后和从后往前遍历查找左右最大值，用了两个数组，三次遍历，
 * 时间复杂度o(n),空间复杂度o(n)
 */
const trap=(height)=>{
    const len=height.length
    let lMax=[];
        rMax=[];
    lMax[0]=height[0]
    for(let i=1;i<len;i++){
        lMax[i]=Math.max(lMax[i-1],height[i]);
    }
    rMax[len-1]=height[len-1];
    for(let i=len-2;i>=0;i--){
        rMax[i]=Math.max(rMax[i+1],height[i])
    }
    let ans=0;
    for(let i=0;i<len;i++){
        //这个循环其实也可以和上面左最高的合并
        ans+=Math.min(lMax[i],rMax[i])-height[i]
    }
    return ans  
}

/**
 * 
 * 动态规划优化-双指针
 * 每个i位置的左右最大值只使用了一次，所以如果能将数组优化为一个单独变量，就能节省空间
 * 但是我们发现左右的最大值并不能同时在一次循环中求出
 * 然而其实我们是不需要求出左右最大值的，而是只需要左右最大值中的较小值，也就是水桶的较短一块板
 * 可以定义两个指针left,right分别从左和从右遍历，并维护两个变量lMax和rMax;
 * 以左边为例，假设left指针移动到某处，发现lMax<rMax,此时right指针还未与left相遇，
 * 但是不管是lMax还是rMax在迭代过程中，都是只会变大的，所以在left点的右边界最大值肯定是大于rMax的，所以
 * 我们可知lMax就是两边界的最小值，此处可接雨水lMax-height[left]
 * 右侧同理
 */
const trap1=(height)=>{
    const len=height.length
    let left=0
        right=len-1
        lMax=0
        rMax=0
        ans=0
    while(left<right){
        lMax=Math.max(lMax,height[left])
        rMax=Math.max(rMax,height[right])
        if(lMax<rMax){
            ans+=lMax-height[left]
            left++
        }else{
            ans+=rMax-height[right]
            right--
        }
    }
    return ans
}