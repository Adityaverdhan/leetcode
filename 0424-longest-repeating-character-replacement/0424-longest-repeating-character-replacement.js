/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let count=new Map();
    let left=0;
    let maxFreq=0;
    let maxLength=0;

    for(let right=0; right<s.length;right++){
        count.set(s[right],(count.get(s[right])||0)+1);
        maxFreq=Math.max(maxFreq,count.get(s[right]));

        while((right-left+1)-maxFreq>k){
            count.set(s[left],count.get(s[left])-1);
            left++;
        }

        maxLength=Math.max(maxLength,(right-left+1));
    }
    return maxLength;
};