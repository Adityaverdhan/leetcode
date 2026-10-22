/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    nums.sort((a, b) => a - b);
    let result = [];
    let path = [];
    let usedPath = new Array(nums.length).fill(false);

    function backtracking() {

        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {

            if (usedPath[i]){
                continue;
            }

            
            if (i > 0 && nums[i] === nums[i - 1] && !usedPath[i - 1]) {
                continue;
            }

            usedPath[i] = true;
            path.push(nums[i]);


            backtracking();

            path.pop();
            usedPath[i] = false;
        }

    }

    backtracking();
    return result;
}
