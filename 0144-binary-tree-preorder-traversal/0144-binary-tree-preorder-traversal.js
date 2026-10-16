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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let result=[];

    function recur(node){
        if(node===null) return; 

        result.push(node.val);
        recur(node.left);
        recur(node.right);
    }

    recur(root);

    return result;


};