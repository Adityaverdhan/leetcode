/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let result = "1";

  for (let round = 2; round <= n; round++) {
    let next = "";
    let count = 1;

    for (let i = 1; i <= result.length; i++) {
      if (result[i] === result[i - 1]) {
        count++;
      } else {
        next += count + result[i - 1];
        count = 1;
      }
    }

    result = next;
  }

  return result;
};