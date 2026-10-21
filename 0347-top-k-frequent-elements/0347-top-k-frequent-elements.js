/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) map[nums[i]] = 0;
        ++map[nums[i]];
    }
    
    let pq = new MinPriorityQueue(x => x.freq);
    for (const key in map) {
        pq.push({ val: key, freq: map[key] }); 
        if (pq.size() > k) {
            pq.pop();
        }
    }
    
    return pq.toArray().map(x => Number(x.val))
};