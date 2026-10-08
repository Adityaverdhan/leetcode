/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head||!head.next) return head;

    let dumy=new ListNode(0);
    dumy.next=head;
    curr=dumy;

    while(curr.next!==null && curr.next.next!==null){
        let first= curr.next;
        let second=curr.next.next;

        first.next=second.next;
        second.next=first;
        curr.next=second;

        curr=first;        
    }
    return dumy.next;
};