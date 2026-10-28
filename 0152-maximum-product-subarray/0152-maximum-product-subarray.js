var maxProduct = function(nums) {
    let maxfound=nums[0];
    let minfound=nums[0];
    let finalmax=nums[0];

    for(let i=1; i<nums.length; i++){
        let current=nums[i];
        let tempresult=maxfound;

        maxfound=Math.max(current,current*maxfound,current*minfound);
        minfound=Math.min(current,current*tempresult,current*minfound);

        finalmax=Math.max(finalmax,maxfound);
    }

    return finalmax;
};