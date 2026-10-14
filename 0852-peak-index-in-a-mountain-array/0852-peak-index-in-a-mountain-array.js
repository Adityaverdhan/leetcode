/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let left=0;
    let right=arr.length-1;

    while(left<right){
        let mid=left+Math.floor((right-left)/2);

        if(arr[mid+1]>arr[mid]){
            left=mid+1;
        }else{
            right=mid;
        }
    }
    return right;//left
};