/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const greaterNumber= new Map();
    const stack=[];

    for(let ch of nums2){
        while(stack.length>0 && stack[stack.length-1]<ch){
            let popped= stack.pop();
            greaterNumber.set(popped,ch);
        }

        stack.push(ch);
    }

    return nums1.map((ch)=>greaterNumber.get(ch)??-1);
};