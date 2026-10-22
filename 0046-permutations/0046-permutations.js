/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {

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

            path.push(nums[i]);
            usedPath[i]=true;

            backtracking();

            path.pop();
            usedPath[i]=false;
        }
    }

    backtracking();
    return result;
};