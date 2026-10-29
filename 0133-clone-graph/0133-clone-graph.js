/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if(node===null){
        return null;
    }

    let map=new Map();

    function cloneGraph(node){
        if(map.has(node)){
            return map.get(node);
        }

        let clone=new Node(node.val);

        map.set(node,clone);

        for(let n of node.neighbors){
            clone.neighbors.push(cloneGraph(n));
        }

        return clone;
    }

    return cloneGraph(node);
}