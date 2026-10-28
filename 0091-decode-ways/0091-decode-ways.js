/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {

    let n = s.length;
    let dp = new Array(n + 1).fill(0);

    dp[0] = 1;

    if (s[0] !== "0") {
        dp[1] = 1;
    }

    for (let i = 2; i <= n; i++) {
        let oneDigit = s[i - 1];
        if (oneDigit >= "1" && oneDigit <= "9") {
            dp[i] += dp[i - 1];
        }


        let twoDigit = s.substring(i - 2, i);
        if (twoDigit >= "10" && twoDigit <= "26") {
            dp[i] += dp[i - 2];
        }
    }

    return dp[n];
}

