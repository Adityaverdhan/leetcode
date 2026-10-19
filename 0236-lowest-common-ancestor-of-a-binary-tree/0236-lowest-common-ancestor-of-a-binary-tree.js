/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(root===null || root===p || root===q) return root;

    let leftAnc=lowestCommonAncestor(root.left,p,q);
    let rightAnc=lowestCommonAncestor(root.right,p,q);

    if(leftAnc!==null&&rightAnc!==null) return root;

    return leftAnc!==null?leftAnc:rightAnc;
};
