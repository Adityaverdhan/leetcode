function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price;               // new best day to buy
    } else if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice;   // better profit by selling today
    }
  }

  return maxProfit;
}