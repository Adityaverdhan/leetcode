/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let start = 0;
    let second = 0;

    for (let i = 2; i <=cost.length; i++) {
        let current = Math.min(second + cost[i - 1], start + cost[i - 2]);
        start = second;
        second = current;
    }

    return second;
}