/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(head===null||head.next===null||k===0) {
        return head;
    }
    let length=1;
    curr=head;

    while(curr.next!==null){
        curr=curr.next;
        length++;
    }

    k=k%length;
    if(k===0) return head;

    curr.next=head;

    let toNewHead=length-k-1;
    let newHead=head;

    while(toNewHead>0){
        newHead=newHead.next;
        toNewHead--;
    }

    let CurrHead= newHead.next;
    newHead.next =null;

    return CurrHead;
};