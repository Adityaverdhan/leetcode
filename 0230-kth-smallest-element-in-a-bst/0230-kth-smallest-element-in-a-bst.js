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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    
    let count=0;
    let result=0;

    function inOrderTraversal(node){
        if(node===null) return;

        inOrderTraversal(node.left);

        count++;

        if(count===k){
            result=node.val;
            return result;
        }

        inOrderTraversal(node.right);
    }

    inOrderTraversal(root);

    return result;
};