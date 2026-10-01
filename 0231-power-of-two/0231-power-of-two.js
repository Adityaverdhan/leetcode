/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n === 1) {return true};
    if (n < 1 || n % 2 !== 0) return false;
    while (n % 2 === 0) {
        n /= 2;
    }
    return n===1;//true if n===1
};