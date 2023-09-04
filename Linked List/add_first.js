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
}

module.exports = LinkedList;
