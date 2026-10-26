/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let n=ratings.length;
    let candy=new Array(n).fill(1);

    for(let i=1; i<n; i++){
        if(ratings[i]>ratings[i-1]){
            candy[i]=candy[i-1]+1;
        }
    }

    for(let i=n-2; i>=0 ;i--){
        if(ratings[i]>ratings[i+1]){
            candy[i]=Math.max(candy[i],candy[i+1]+1);
        }
    }

    count=0;
    for(let i of candy){
        count+=i;
    }

    return count;
};
