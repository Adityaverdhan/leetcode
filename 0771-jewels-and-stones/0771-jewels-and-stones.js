/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count=0;
    for(let i=0; i<=stones.length-1;i++){
        if(jewels.includes(stones.charAt(i))){
            count++;
        }
    }return count;
};