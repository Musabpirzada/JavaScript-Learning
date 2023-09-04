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

    indexOf(nodeToFind) {
        let current = this.head;
        let index = 0;

        while (current) {
            if (current === nodeToFind) {
                return index;
            }

            current = current.next;
            index++;
        }

        return -1; // Node not found in the list
    }
}

module.exports = LinkedList;
