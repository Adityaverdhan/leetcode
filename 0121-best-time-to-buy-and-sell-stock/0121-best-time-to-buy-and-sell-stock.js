function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (const i of prices) {
    if (i < minPrice) {
      minPrice = i;               // new best day to buy
    } else if (i - minPrice > maxProfit) {
      maxProfit = i - minPrice;   // better profit by selling today
    }
  }

  return maxProfit;
}