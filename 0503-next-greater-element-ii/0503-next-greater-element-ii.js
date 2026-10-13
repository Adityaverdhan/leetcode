/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const n= nums.length;
    const arr= new Array(n).fill(-1);
    let stack =[];

    for(let i=0; i<2*n;i++){
        const index=i%n;

        while( stack.length>0 && nums[stack[stack.length-1]]<nums[index] )
        {
            let prev= stack.pop();
            arr[prev]= nums[index];
        }

        if(i<n){
            stack.push(index);
        }
    }
    return arr;
};