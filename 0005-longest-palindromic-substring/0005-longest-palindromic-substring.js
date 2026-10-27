/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {

    let start = 0;
    let maxLength = 1;

    function checkMaxPalindrome(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            let currentPalindLength = right - left + 1;

            if (currentPalindLength > maxLength) {
                start = left;
                maxLength = currentPalindLength;
            }
            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        checkMaxPalindrome(i, i);
        checkMaxPalindrome(i, i + 1);
    }

    return s.substring(start, start + maxLength);

};
