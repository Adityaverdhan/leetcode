/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let netgas=0;
    let tank=0;
    let startPoint=0;

    for(let i=0; i<gas.length; i++){
        let gain=gas[i]-cost[i];
        netgas+=gain;
        tank+=gain;

        if(tank<0){
            startPoint=i+1;
            tank=0;
        }
    }
    if(netgas<0){
        return -1;
    }

    return startPoint;
};