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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    function sameTree(a,b){
        if(!a && !b) return true;

        if(!a || !b) return false;

        if(a.val!==b.val) return false;

        return sameTree(a.left,b.left) && sameTree(a.right,b.right);
    }

    if(!root) return false;

    if(sameTree(root,subRoot)) return true;

    return isSubtree(root.left,subRoot)||isSubtree(root.right,subRoot);
};