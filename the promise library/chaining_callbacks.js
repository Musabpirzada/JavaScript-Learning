const STATUS = {
    PENDING: 0,
    RESOLVED: 1,
    REJECTED: 2,
};

class Pact {
    constructor(fn) {
        this.thenFns = [];
        this.catchFns = [];
        this.status = STATUS.PENDING;
        this.resolvedValue = undefined; // Initialize resolved value
        this.rejectedValue = undefined; // Initialize rejected value

        this.resolve = (value) => {
            if (this.status === STATUS.PENDING) {
                this.resolvedValue = value;
                this.status = STATUS.RESOLVED;
                this.executeThenCallbacks();
            }
        };

        this.reject = (value) => {
            if (this.status === STATUS.PENDING) {
                this.rejectedValue = value;
                this.status = STATUS.REJECTED;
                this.executeCatchCallbacks();
            }
        };

        fn(this.resolve, this.reject);
    }

    executeThenCallbacks() {
        // Execute all registered `then` callbacks sequentially
        let value = this.resolvedValue;
        for (const fn of this.thenFns) {
            value = fn(value);
        }
    }

    executeCatchCallbacks() {
        // Execute all registered `catch` callbacks sequentially
        let value = this.rejectedValue;
        for (const fn of this.catchFns) {
            value = fn(value);
        }
    }

    then(_then) {
        if (this.status === STATUS.PENDING) {
            this.thenFns.push(_then);
        } else if (this.status === STATUS.RESOLVED) {
            // Execute the `then` callback immediately and update the resolved value
            this.resolvedValue = _then(this.resolvedValue);
        }
        return this; // Return the Pact instance for method chaining
    }

    catch(_catch) {
        if (this.status === STATUS.PENDING) {
            this.catchFns.push(_catch);
        } else if (this.status === STATUS.REJECTED) {
            // Execute the `catch` callback immediately and update the rejected value
            this.rejectedValue = _catch(this.rejectedValue);
        }
        return this; // Return the Pact instance for method chaining
    }
}

module.exports = Pact;
