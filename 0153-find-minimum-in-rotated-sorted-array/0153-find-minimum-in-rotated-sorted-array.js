/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left=0;
    let right=nums.length-1;

    while(left<=right){
        if(nums[left]<=nums[right]){
            return nums[left];
        }

        let mid=left+Math.floor((right-left)/2);
        if(mid>0 && nums[mid]<nums[mid-1]){
            return nums[mid];
        }

        if(nums[left]>nums[mid]){
            right=mid-1;
        }else{
            left=mid+1;
        }
    }
};