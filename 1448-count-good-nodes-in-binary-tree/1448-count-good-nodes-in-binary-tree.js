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
 * @return {number}
 */
var goodNodes = function(root) {
    let count=0;

    function GoodNodes(node,maxVal){
        if(node===null) return;

        if(node.val>=maxVal) count++;

        maxVal=Math.max(maxVal,node.val);

        GoodNodes(node.left,maxVal);
        GoodNodes(node.right,maxVal);
    }

    GoodNodes(root,root.val);

    return count;
};