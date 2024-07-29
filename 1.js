const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

function isGood(val,num,arr){
    let cnt=0;
    for(let i=0;i<arr.length;i++){
        cnt+=Math.ceil(arr[i]/val);
    }
    if(cnt>num){
        return false;
    }
    return true;
}

void async function(){
    let str=await readline();
    let arr=str.split(" ").map(val=>parseInt(val));
    let num=await readline();
    num=parseInt(num);
    if(num<arr.length){
        console.log(0);
        return;
    }
    let left=0;
    let right=10000;
    while(left<=right){
        let mid=Math.floor((right+left)/2);
        if(isGood(mid,num,arr)){
            right=mid-1;
        }else{
            left=mid+1;
        }
    }
    console.log(left)
}()

























// function isGood(val, arr, num) {
//     let cnt = 0;
//     for (let i = 0; i < arr.length; ++i) {
//         cnt = cnt + Math.ceil(arr[i] / val);
//         if (cnt > num) {
//             return false;
//         }
//     }
//     return true;
// }

// void async function () {
//     let str=await readline();
//     let arr=str.split(" ").map(val=>parseInt(val));
//     let num=await readline();
//     parseInt(num);
//     if(num<arr.length){
//         console.log(0);
//         return;
//     }
//     let left=0;
//     let right=10000;//用最大值也可以，但是已经给了范围就不用了
//     while(left<=right){
//         let mid=Math.floor((left+right)/2);
//         if(isGood(mid,arr,num)){
//             right=mid-1;    
//         }else{
//             left=mid+1;
//         }
//     }
//     console.log(left);
// }()
         