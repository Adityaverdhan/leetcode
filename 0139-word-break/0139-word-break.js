/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    let wordMatch = new Set(wordDict);

    let map = new Array(s.length + 1).fill(false);

    map[0] = true;

    for (let i = 1; i <=s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (map[j] && wordMatch.has(s.substring(j, i))) {
                map[i] = true;
                break;
            }
        }
    }

    return map[s.length];

}
