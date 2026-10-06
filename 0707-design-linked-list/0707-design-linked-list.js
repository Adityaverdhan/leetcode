class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var MyLinkedList = function () {
    this.head = null;
    this.size = 0;
};

/**
 * Get the value at index.
 */
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size) return -1;

    let curr = this.head;
    for (let i = 0; i < index; i++) {
        curr = curr.next;
    }

    return curr.val;
};

/**
 * Add at head.
 */
MyLinkedList.prototype.addAtHead = function (val) {
    const node = new ListNode(val);
    node.next = this.head;
    this.head = node;
    this.size++;
};

/**
 * Add at tail.
 */
MyLinkedList.prototype.addAtTail = function (val) {
    const node = new ListNode(val);

    if (this.head === null) {
        this.head = node;
    } else {
        let curr = this.head;
        while (curr.next !== null) {
            curr = curr.next;
        }
        curr.next = node;
    }

    this.size++;
};

/**
 * Add at index.
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index < 0 || index > this.size) return;

    if (index === 0) {
        this.addAtHead(val);
        return;
    }

    const node = new ListNode(val);
    let prev = this.head;

    for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
    }

    node.next = prev.next;
    prev.next = node;
    this.size++;
};

/**
 * Delete at index.
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.size) return;

    if (index === 0) {
        this.head = this.head.next;
    } else {
        let prev = this.head;

        for (let i = 0; i < index - 1; i++) {
            prev = prev.next;
        }

        prev.next = prev.next.next;
    }

    this.size--;
};