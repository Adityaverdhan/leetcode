/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map=new Map();

    for( let i=0; i<strs.length; i++){
        let sortedstr = strs[i].split("").sort().join("");

        if(!map[sortedstr]){
            map[sortedstr]=[strs[i]];
        }
        else{
            map[sortedstr].push(strs[i]);
        }
    }

    return Object.values(map);
      //return [...map.values()];
};

// var groupAnagrams = function(strs) {
//     let map = new Map();
  
//       for (let i = 0; i < strs.length; i++) {
//           let sortedStr = strs[i].split("").sort().join(""); 
  
//           if (!map[sortedStr]) {
//               map[sortedStr] = [strs[i]];
//           } else {
//               map[sortedStr].push(strs[i]);
//           }
//       }
  
//       return Object.values(map);
//       //return [...map.values()];
// };

