/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {

    let result=0;
    let left=0;
    let right=height.length-1;

    let lmax=0;
    let rmax=0;

    while(left< right){
        lmax=Math.max(lmax,height[left]);
        rmax=Math.max(rmax,height[right]);

        if(lmax<rmax){
            result+=lmax-height[left];
            left++;
        }else{
            result+=rmax-height[right];
            right--;
        }
    }
    return result;
};