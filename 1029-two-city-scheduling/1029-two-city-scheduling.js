/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    costs.sort((a,b)=>{
        let diffA=a[0]-a[1];
        let diffB=b[0]-b[1];

        return diffA-diffB;
    });

    let minCost=0;
    let n=costs.length/2;

    for(let i=0; i<costs.length; i++){
        if(i<n){
            minCost+=costs[i][0];
        }else{
            minCost+=costs[i][1];
        }
    }
    return minCost;
};