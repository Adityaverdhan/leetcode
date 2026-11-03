/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {

    let start=0;
    let maxLength=1;

    function longestPalindrome(left,right){
        while(left>=0 && right<s.length && s[left]===s[right]){
            let currentMaxLength=right-left+1;

            if(currentMaxLength>maxLength){
                start=left;
                maxLength=currentMaxLength;
            }
            left--;
            right++;
        }
    }

    for(let i=0; i<s.length; i++){
        longestPalindrome(i,i);
        longestPalindrome(i,i+1);
    }

    return s.substring(start,start+maxLength);

};
