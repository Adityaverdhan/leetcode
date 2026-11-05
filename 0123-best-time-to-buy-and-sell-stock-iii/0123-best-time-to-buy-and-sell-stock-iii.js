/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy1 = Infinity;
    let buy2 = Infinity;
    let profit1 = 0;
    let profit2 = 0;

    for (let price of prices) {
        buy1 = Math.min(buy1, price);
        profit1 = Math.max(profit1, price - buy1);

        buy2 = Math.min(buy2, price - profit1);
        profit2 = Math.max(profit2, price - buy2);
    }

    return profit2;
};