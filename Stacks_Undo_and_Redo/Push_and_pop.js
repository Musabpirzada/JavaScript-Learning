const { MAX_STACK_SIZE } = require('./config');

class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        if (this.items.length < MAX_STACK_SIZE) {
            this.items.push(item);
        } else {
            throw new Error('Stack overflow');
        }
    }
    pop() {
        if (this.items.length === 0) {
            throw new Error('Stack underflow');
        }
        return this.items.pop();
    }
    isEmpty() {
        return this.items.length === 0;
    }
    peek() {
        if (this.items.length === 0) {
            throw new Error('Stack is empty');
        }
        return this.items[this.items.length - 1];
    }
}

module.exports = Stack;
