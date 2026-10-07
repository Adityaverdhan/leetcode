/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy_node=new LinkedList(0);
    dummy_node.next=head;
    let count=0;
    let current=head;
    while(current){
        count++;
        current=current.next;
    }

    let prev=dummy_node;
    for(let i=0; i<count-n; i++){
        prev=prev.next;
    }

    prev.next=prev.next.next;
    return dummy_node.next;
};