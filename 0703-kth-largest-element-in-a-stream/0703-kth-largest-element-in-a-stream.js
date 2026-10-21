/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.heap = new MinPriorityQueue();
    this.k = k;
    for (const num of nums) {
        this.add(num);
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    this.heap.enqueue(val);

    // Keep only the k largest scores.
    if (this.heap.size() > this.k) {
        this.heap.dequeue(); // removes the smallest score
    }

    // Smallest of the k largest scores = kth largest overall.
    return this.heap.front();

    // Smallest value among the k largest = kth largest overall.
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */