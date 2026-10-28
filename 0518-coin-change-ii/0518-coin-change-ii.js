/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    let dp=new Array(amount+1).fill(0);
    dp[0]=1;

    for(let y of coins){
        for( let i=y; i<=amount; i++){
            dp[i]+=dp[i-y];
        }
    }

    return dp[amount];
};
