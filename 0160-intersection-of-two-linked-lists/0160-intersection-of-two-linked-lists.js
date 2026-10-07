/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let pointA=headA;
    let pointB=headB;

    while(pointA!==pointB){
        pointA=pointA===null?headB:pointA.next;
        pointB=pointB===null?headA:pointB.next;
    }

    return pointA;
};