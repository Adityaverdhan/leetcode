/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let last=new Array(26).fill(0);

    for(let i=0; i< s.length; i++){
        last[s.charCodeAt(i)-97]=i;
    }

    let result=[];
    let start=0; 
    let end=0;

    for(let i=0; i< s.length; i++){
        end=Math.max(end,last[s.charCodeAt(i)-97]);

        if(i===end){
            result.push(end-start+1);
            start=i+1;
        }
    }
    return result;

};