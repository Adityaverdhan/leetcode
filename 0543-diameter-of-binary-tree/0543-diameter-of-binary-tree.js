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
var diameterOfBinaryTree = function(root) {
    let diameter=0;
    function  diamH(node){
        if(node===null) return 0;

        let lf=diamH(node.left);
        let rf=diamH(node.right);

        diameter=Math.max(diameter,lf+rf);

        return Math.max(lf,rf)+1;
    }

    diamH(root);

    return diameter;
};