/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let last=0;
    let secondlast=0;

    for (let i=0; i<nums.length; i++){
        let current=Math.max(last, nums[i]+secondlast);

        secondlast=last;
        last=current;
    }

    return last;
};