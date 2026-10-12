/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack=[];
    let pairs={
        ")":"(",
        "]":"[",
        "}":"{"
    };

    for(let ch of s){
        if(ch==="("||ch==="["||ch==="{"){
            stack.push(ch);
        }else{
            if(stack.pop() !== pairs[ch])
                return false;
        }

    }
    return stack.length===0;
};