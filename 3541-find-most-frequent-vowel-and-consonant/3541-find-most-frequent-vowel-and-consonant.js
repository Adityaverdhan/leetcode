/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    const vowels = "aeiou";
  const freq = {};

  for (const ch of s) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  let maxVowel = 0;
  let maxConsonant = 0;

  for (const ch in freq) {
    if (vowels.includes(ch)) {
      maxVowel = Math.max(maxVowel, freq[ch]);
    } else {
      maxConsonant = Math.max(maxConsonant, freq[ch]);
    }
  }

  return maxVowel + maxConsonant;
};