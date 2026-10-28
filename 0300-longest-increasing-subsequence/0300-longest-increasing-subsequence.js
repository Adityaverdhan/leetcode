/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let array=[];

    for(let n of nums){
        let left=0;
        let right=array.length;

        while(left<right){
            let mid=Math.floor((right+left)/2);
            if(array[mid]<n){
                left=mid+1;
            }else{
                right=mid;
            }
        }
        array[left]=n;
    }

    return array.length;
};
