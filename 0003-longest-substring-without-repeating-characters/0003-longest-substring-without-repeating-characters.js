/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set= new Set();
    let left=0;
    let maxl=0;

    for(let right=0;right<s.length;right++){

        while(set.has(s[right])){
            set.delete(s[left]);
            left++;
        }

        set.add(s[right]);
        maxl=Math.max(maxl,right-left+1);
    }
    return maxl;

};