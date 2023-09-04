class LinkedList {
    constructor() {
        this.head = null;
    }

    addFirst(node) {
        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }

    addLast(node) {
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }
}

module.exports = LinkedList;
