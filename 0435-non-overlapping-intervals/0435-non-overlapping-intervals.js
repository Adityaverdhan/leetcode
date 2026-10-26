/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b)=>a[1]-b[1]);

    let count=0;
    let last=intervals[0][1];

    for(let i=1; i<intervals.length; i++){
        if(intervals[i][0]<last){
            count++;
        }else{
            last=intervals[i][1];
        }
    }
    return count;

};