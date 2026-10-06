var isPalindrome = function(head) {
    if (!head || !head.next) return true;

    let slow=head;
    let fast=head;
    //find middle
    while(fast!==null && fast.next!==null){
        slow=slow.next;
        fast=fast.next.next;
    }

    let prev=null;
    let curr=slow;
    //reverse from middle/reverse the 2nd half
    while(curr!==null){
        let next=curr.next;
        curr.next=prev;
        prev=curr;
        curr=next;
    }
    //compare values now
    let left=head;
    let right=prev;
    while(right!==null){
        if(left.val!==right.val) return false;
        left=left.next;
        right=right.next;
    }

    return true;
}
