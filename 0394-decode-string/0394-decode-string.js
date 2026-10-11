/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack=[];
    let currString ="";
    let currNumber=0;

    for(let char of s){
        if(char >= "0" && char<="9"){
            currNumber= currNumber*10 + Number(char);
        }else if(char==='['){
            stack.push([currString,currNumber]);
            currString = "";
            currNumber = 0;
        }else if(char==="]"){
            let [prevString,prevNumber]=stack.pop();
            currString = prevString + currString.repeat(prevNumber);
        }else{
            currString+=char;
        }
    }
    return currString;
};