/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    
    let total=nums.reduce((sum,num)=>sum+num,0);

    if(total%2!==0){
        return false;
    }

    let target=total/2;

    let dp=new Array(target+1).fill(0);

    dp[0]=true;

    for(let i of nums){
        for(let sum=target; sum>=i; sum--){
            dp[sum]=dp[sum] || dp[sum-i];
        }
    }
    return dp[target];
};
