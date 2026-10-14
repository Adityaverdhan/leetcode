/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left=0; let right=nums.length-1;
    let ans=[-1,-1];

    while(left<right){
        let mid=left+Math.floor((right-left)/2);
        if(nums[mid]<target){
            left=mid+1;
        }else{right=mid;}
    }

    if(nums[left]===target) ans[0]=left;

    left=0; 
    right=nums.length-1;
    

    while(left<right){
        let mid=left+Math.ceil((right-left)/2);
        if(nums[mid]>target){
            right=mid-1;
        }else{left=mid;}
    }
    if(nums[left]===target) ans[1]=left;

    return ans;
};