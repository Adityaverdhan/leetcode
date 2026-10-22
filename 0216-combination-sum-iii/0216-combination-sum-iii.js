/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {

    let result = [];
    let path = [];

    function backtracking(start, remaining) {

        if (path.length === k) {
            if (remaining === 0) {
                result.push([...path]);
                return;
            }
        }

        for (let i = start; i <= 9; i++) {

            if (i > remaining) {
                break;
            }

            path.push(i);
            backtracking(i + 1, remaining - i);
            path.pop();
        }
    }
    backtracking(1, n)
    return result;

}


// let result=[];
//     let path=[];

//     function backTracking(start,remaining){
//         if(path.length===k){
//             if(remaining===0){
//                 result.push([...path]);
//                 return;
//             }
//         }

//         for(let i=start;i<=9;i++){

//             if(i>remaining){
//                 break;
//             }

//             path.push(i);
//             backTracking(i+1,remaining-i);
//             path.pop();
//         }
//     }
//     backTracking(1,n)
//     return result;