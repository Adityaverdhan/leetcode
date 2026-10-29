/**
 * @param {number[]} nums
 * @return {number}
 */
var jump=function(nums){
    let maxJump=0;
    let currentIndex=0;
    let count=0;

    for(let i=0; i<nums.length-1; i++){
        maxJump=Math.max(maxJump, i+nums[i]);

        if(i===currentIndex){
            count++;
            currentIndex=maxJump;
        }
    }
    return count;
}