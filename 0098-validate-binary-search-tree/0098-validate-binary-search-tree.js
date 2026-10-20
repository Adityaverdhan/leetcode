/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    
    function validNodes(node,min,max){
        if(node===null) return true;

        if(node.val<=min || node.val>=max) return false;

        if(!validNodes(node.left,min,node.val)) return false;

        if(!validNodes(node.right,node.val,max)) return false;

        return true;
    }

    return validNodes(root,-Infinity,+Infinity);
};