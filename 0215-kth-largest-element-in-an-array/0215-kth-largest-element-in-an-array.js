var findKthLargest = function (nums, k) {
    const OFFSET = 10000;
    const count = new Int32Array(20001); // Covers [-10000, 10000]

    // Count frequencies
    for (let i = 0; i < nums.length; i++) {
        count[nums[i] + OFFSET]++;
    }

    // Traverse from largest to smallest to find the kth element
    for (let i = count.length - 1; i >= 0; i--) {
        k -= count[i];
        if (k <= 0) {
            return i - OFFSET;
        }
    }

    return -1;
};