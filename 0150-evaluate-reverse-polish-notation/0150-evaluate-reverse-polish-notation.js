/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack=[];
    
    for(let ch of tokens){
        if(!["+","-","*","/"].includes(ch)){
            stack.push(Number(ch));
        }
        else{
            let right=stack.pop();
            let left=stack.pop();

            switch(ch){
                case "+":
                    stack.push(left+right);
                    break;

                case "-":
                    stack.push(left-right);
                    break;

                case "*":
                    stack.push(left*right);
                    break; 

                case "/":
                    stack.push(Math.trunc(left/right));
                    break;   
            }
        }
    }
    return stack.pop();
};