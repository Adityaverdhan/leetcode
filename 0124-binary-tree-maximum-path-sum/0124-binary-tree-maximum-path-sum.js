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
var maxPathSum = function(root) {
    let maxCount=-Infinity;

    function MaxPath(node){
        if(node===null) return 0;

        let leftPath=Math.max(0,MaxPath(node.left));
        let rightPath=Math.max(0,MaxPath(node.right));

        let currentVal = leftPath+node.val+rightPath;

        maxCount=Math.max(currentVal,maxCount);

        return node.val+ Math.max(leftPath,rightPath);
    }

    MaxPath(root);

    return maxCount;
};