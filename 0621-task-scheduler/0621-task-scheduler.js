/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let freq=new Array(26).fill(0);

    for(let i=0; i<tasks.length; i++){
        freq[tasks[i].charCodeAt()-65]++;
    }

    let maxFreq=Math.max(...freq);
    let countMax=0;

    for(let y of freq){
        if(y===maxFreq){
            countMax++;
        }
    }

    let result=(maxFreq-1)*(n+1)+countMax;

    return Math.max(result, tasks.length);

};