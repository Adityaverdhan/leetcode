/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let freqmap=new Map();

    for(const i of nums){
        freqmap.set(i, (freqmap.get(i)??0) +1); 
    }

    let freqValue= [...freqmap].sort((a,b)=>b[1]-a[1]);

    return freqValue.slice(0,k).map(([num])=>num);
};