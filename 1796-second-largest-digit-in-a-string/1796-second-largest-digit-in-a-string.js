
var secondHighest = function(s) {
    let largest = -1;
    let second = -1;

    for (let ch of s) {
        if (ch >= '0' && ch <= '9') {
            let num = Number(ch);

            if (num > largest) {
                second = largest;
                largest = num;
            } else if (num < largest && num > second) {
                second = num;
            }
        }
    }

    return second;
};  