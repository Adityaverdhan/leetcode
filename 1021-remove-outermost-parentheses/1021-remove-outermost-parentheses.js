/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let result="";
    let depth=0;

    for(let ch of s){
        if(ch==="("){
            if(depth>0){
                result+=ch;
            }
            depth++;
        }
        else{
            depth--;
            if(depth>0){
                result+=ch;
            }
        }
    }
    return result;
};