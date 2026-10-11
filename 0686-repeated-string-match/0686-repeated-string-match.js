/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function (a, b) {
    let repeated = a;
    let count = 1;

    while (repeated.length < b.length) {
        repeated += a;
        count++;
    }

    if (repeated.includes(b)) {
        return count;
    } else {
        repeated += a;

        if (repeated.includes(b)) {
            return count + 1;
        }
    }



    return -1;
};
// let repeated = a;
//   let count = 1;

//   // Repeat until its length is at least b's length
//   while (repeated.length < b.length) {
//     repeated += a;
//     count++;
//   }

//   // b may cross the boundary between two repetitions
//   if (repeated.includes(b)) {
//     return count;
//   }
//   repeated += a;

//   if (repeated.includes(b)) {
//     return count + 1;
//   }

//   return -1;