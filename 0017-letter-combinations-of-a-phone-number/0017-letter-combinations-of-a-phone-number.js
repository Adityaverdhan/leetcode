/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) {
        return [];
    }

    let map = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };

    let result=[];
    let path="";

    function backTrack(index){
        if(index===digits.length){
            result.push(path);
            return;
        }

        let letters= map[digits[index]];

        for(let ch of letters){
            path+=ch;
            backTrack(index+1);
            path=path.slice(0,-1);
        }
    }
    backTrack(0);
    return result;
};