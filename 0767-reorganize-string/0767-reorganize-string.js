/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    let freq = new Array(26).fill(0);

    for (let char of s) {
        freq[char.charCodeAt(0) - 97]++;
    }

    let maxFreq = Math.max(...freq);

    if (maxFreq > Math.ceil(s.length / 2)) {
        return "";
    }

    let maxIndex = freq.indexOf(maxFreq);
    let result = new Array(s.length);
    let index = 0;

    // Place the most frequent character first
    while (freq[maxIndex] > 0) {
        result[index] = String.fromCharCode(maxIndex + 97);
        index += 2;
        freq[maxIndex]--;
    }

    // Place all remaining characters
    for (let i = 0; i < 26; i++) {
        while (freq[i] > 0) {
            if (index >= s.length) {
                index = 1;
            }

            result[index] = String.fromCharCode(i + 97);
            index += 2;
            freq[i]--;
        }
    }

    return result.join("");
};