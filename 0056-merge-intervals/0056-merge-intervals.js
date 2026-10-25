/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length<=1) return intervals;

    intervals.sort((a,b)=>a[0]-b[0]);

    let result=[intervals[0]];

    for(let i=1; i<intervals.length; i++){
        let last=result[result.length-1];
        let currentInterval=intervals[i];

        if(currentInterval[0]<=last[1]){
            last[1]=Math.max(currentInterval[1],last[1]);
            //result.push(last);
        }else{
            result.push(currentInterval);
        }
    }
    return result;
};