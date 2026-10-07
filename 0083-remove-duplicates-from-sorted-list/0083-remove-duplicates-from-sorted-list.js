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
var deleteDuplicates = function(head) {
    
    let current=head;
    while(current!==null && current.next!==null){
        if(current.val===current.next.val){
            current.next=current.next.next;
        }else{
            current=current.next;
        }
    }
    return head;
}
// let dummy = new ListNode(0);
//     dummy.next=head;
//     let curr=head;
//     while(curr.next!==null){
//         if(curr.val===curr.next.val){
//             curr.next=curr.next.next;
//         }
//         else{curr=curr.next;}
//     }
//     return dummy.next;
