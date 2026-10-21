/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    while (stones.length > 1) {
        stones.sort((a, b) => a - b);
        let y = stones.pop();
        let x = stones.pop();
        if (x !== y) {
            stones.push(y - x);
        }
    }
    return stones.length === 1 ? stones[0] : 0;
}