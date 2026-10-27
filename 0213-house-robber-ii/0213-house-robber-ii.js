/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let n=nums.length;

    if(n===1){
        return nums[0];
    }

    function robberHouse(a,b){

        let last=0;
        let secondlast=0;

        for(let i=a; i<=b; i++){
            let current=Math.max(last, nums[i]+secondlast);
            secondlast=last;
            last=current;
        }
        return last;
    }

    let x=robberHouse(0,n-2);
    let y=robberHouse(1,n-1);

    return Math.max(x,y);
};