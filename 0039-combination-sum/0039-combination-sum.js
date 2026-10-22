/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    
    let result=[];
    let path=[];

    function backtrack(start,remaining){

        if(remaining===0){
            result.push([...path]);
            return;
        }

        for(let i=start; i<candidates.length; i++){

            if(candidates[i]>remaining){
                continue;
            }

            path.push(candidates[i]);
            backtrack(i,remaining-candidates[i]);
            path.pop();
        }
    }
    backtrack(0,target);
    return result;
};

// let result=[];
//     let path=[];

//     function btS(start,remaining){

//         if(remaining===0){
//             result.push([...path]);
//             return;
//         }

//         for(let i=start; i<candidates.length; i++){

//             if(candidates[i]>remaining) continue;

//             path.push(candidates[i]);
//             btS(i,remaining-candidates[i]);
//             path.pop();
//         }

//     }
//     btS(0,target);
//     return result;