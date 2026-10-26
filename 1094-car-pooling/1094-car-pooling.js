/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    let passenger=new Array(1001).fill(0);

    for(let i of trips){
        let num=i[0];
        let start=i[1];
        let drop=i[2];

        passenger[start]+=num;
        passenger[drop]-=num;
    }

    let current=0;

    for(let i=0; i<1000; i++){

        current+=passenger[i];
        if(current>capacity){return false;}
    }
    return true;
};
