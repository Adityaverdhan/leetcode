/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let i= num.length-1;
    while(i>=0){
        if(num[i]%2===1){
            return num.substring(0,i+1);
        }
        i--;
    }
    return "";
};