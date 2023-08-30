const { MAX_STACK_SIZE } = require('./config');

class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        if (this.items.length < MAX_STACK_SIZE) {
            this.items.push(item);
        } else {
            throw new Error('Stack is full: Cannot push more items');
        }
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty: Cannot pop from an empty stack');
        }
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty: Cannot peek into an empty stack');
        }
        return this.items[this.items.length - 1];
    }
}

module.exports = Stack;
