/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {
    let totalBeauty = 0;

  // Choose the starting position of each substring
  for (let start = 0; start < s.length; start++) {
    const count = new Map();

    // Extend the substring one character at a time
    for (let end = start; end < s.length; end++) {
      const char = s[end];
      count.set(char, (count.get(char) || 0) + 1);

      let maxFreq = 0;
      let minFreq = Infinity;

      // Find highest and lowest frequency in this substring
      for (const freq of count.values()) {
        maxFreq = Math.max(maxFreq, freq);
        minFreq = Math.min(minFreq, freq);
      }

      totalBeauty += maxFreq - minFreq;
    }
  }

  return totalBeauty;
};