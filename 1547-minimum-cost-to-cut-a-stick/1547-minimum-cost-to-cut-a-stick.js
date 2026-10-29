/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function(n, cuts) {
    cuts.push(0);
    cuts.push(n);
    cuts.sort((a,b)=>a-b);

    let m=cuts.length;

    let dp=Array.from(
        {length:m},
        ()=>new Array(m).fill(0)
    );

    for(let len=2; len<m; len++){
        for( let i=0; i+len<m; i++){
            let j=i+len;
            dp[i][j]=Infinity;

            for( let k=i+1; k<j ;k++){
                let cost= cuts[j]-cuts[i]+ dp[i][k] + dp[k][j];
                dp[i][j]=Math.min(dp[i][j],cost);
            }
        }
    }
    return dp[0][m-1];
};
