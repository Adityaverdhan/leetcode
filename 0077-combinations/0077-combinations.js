/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    
    result=[];

    function bt(start,current){

        if(current.length===k){
            result.push([...current]);
            return;
        }

        for(let i=start;i<=n;i++){

            current.push(i);

            bt(i+1,current);

            current.pop();
        }
    }

    bt(1,[]);

    return result;
};