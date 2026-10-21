/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const freqCountMap = new Map()

    for (const i of nums) {
        freqCountMap.set(i, (freqCountMap.get(i) ?? 0) + 1)
    }

    const freqValues = [...freqCountMap].sort((a, b) => b[1] - a[1]);

    return freqValues.slice(0, k).map(([num]) => num);

};