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
var postorderTraversal = function(root) {
    let result=[];

    function recurPost(node){
        if(node===null) return;

        recurPost(node.left);
        recurPost(node.right);
        result.push(node.val);
    }

    recurPost(root);

    return result;
};