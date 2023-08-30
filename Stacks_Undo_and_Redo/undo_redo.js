const Stack = require('./Stack');

class OperationsManager {
    constructor() {
        this.operations = new Stack();
        this.undos = new Stack();
    }

    addOperation(operation) {
        this.operations.push(operation);
        // When a new operation is added, we should clear the undos stack.
        this.undos = new Stack();
    }

    undo() {
        if (!this.operations.isEmpty()) {
            const operation = this.operations.pop();
            this.undos.push(operation);
            return operation;
        } else {
            throw new Error('No more operations to undo');
        }
    }

    redo() {
        if (!this.undos.isEmpty()) {
            const operation = this.undos.pop();
            this.operations.push(operation);
            return operation;
        } else {
            throw new Error('No operations to redo');
        }
    }

    redoAll() {
        while (!this.undos.isEmpty()) {
            this.redo();
        }
    }
}

module.exports = OperationsManager;
