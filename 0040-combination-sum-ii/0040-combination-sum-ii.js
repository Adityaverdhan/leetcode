/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let result=[];
    let path=[];
    candidates.sort((a, b) => a - b);

    function btS(start,remaining){

        if(remaining===0){
            result.push([...path]);
            return;
        }

        for(let i=start; i<candidates.length; i++){
            
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }
            if(candidates[i]>remaining) break; //continue

            path.push(candidates[i]);
            btS(i+1,remaining-candidates[i]);
            path.pop();
        }

    }
    btS(0,target);
    return result;
};