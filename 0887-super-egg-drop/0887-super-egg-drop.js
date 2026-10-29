/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var superEggDrop = function(k, n) {
    let dp=new Array(k+1).fill(0);

    let moves=0;

    while(dp[k]<n){
        moves++;
        for(let i=k; i>=1; i--){
            dp[i]=dp[i]+dp[i-1]+1;
        }
    }
    return moves;
};