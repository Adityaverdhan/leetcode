/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let dummy_node=new LinkedList(0);
    dummy_node.next=head;
    let current=dummy_node;

    while(current.next!==null){
        if(current.next.val===val){
            current.next=current.next.next;
        }else{
            current=current.next;
        }
    }
    return dummy_node.next;
};
// let dummy = new ListNode(0);
//     dummy.next = head;

//     let curr = dummy;

//     while (curr.next !== null) {

//         if (curr.next.val === val) {
//             curr.next = curr.next.next;
//         } else {
//             curr = curr.next;
//         }
//     }

//     return dummy.next;