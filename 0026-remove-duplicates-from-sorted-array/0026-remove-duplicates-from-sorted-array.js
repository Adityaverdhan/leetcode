
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let i = 1;

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i - 1]) {
            nums[i] = nums[j];
            i++;
        }
    }

    return i;
};