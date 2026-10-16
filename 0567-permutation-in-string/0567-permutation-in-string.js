/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s1.length>s2.length) return false;

    let count1=new Array(26).fill(0);
    let count2=new Array(26).fill(0);

    for(let i=0; i<s1.length; i++){
        count1[s1.charCodeAt(i)-97]++;
    }

    for(let i=0; i<s1.length; i++){
        count2[s2.charCodeAt(i)-97]++;
    }

    if(count1.toString()===count2.toString()) return true;

    for(let right=s1.length; right<s2.length; right++){
         
        count2[s2.charCodeAt(right)-97]++;
        
        let left=right-s1.length;
        count2[s2.charCodeAt(left)-97]--;

        if(count1.toString()===count2.toString()) return true;

    }

    return false;

};