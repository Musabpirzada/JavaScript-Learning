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

    removeAt(index) {
        if (index < 0) {
            throw new Error("Index must be non-negative");
        }

        if (index === 0) {
            if (this.head) {
                this.head = this.head.next;
            } else {
                throw new Error("List is empty");
            }
        } else {
            let current = this.head;
            let previous = null;
            let currentIndex = 0;

            while (current && currentIndex < index) {
                previous = current;
                current = current.next;
                currentIndex++;
            }

            if (current) {
                previous.next = current.next;
            } else {
                throw new Error("Index out of bounds");
            }
        }
    }
}

module.exports = LinkedList;
