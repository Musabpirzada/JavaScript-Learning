class Pact {
    constructor(executor) {
        // Initialize arrays to hold resolve and reject callbacks
        this.thenCallbacks = [];
        this.catchCallbacks = [];

        const resolve = (value) => {
            // Call all registered `then` callbacks with the resolved value
            this.thenCallbacks.forEach((callback) => {
                callback(value);
            });
        };

        const reject = (reason) => {
            // Call all registered `catch` callbacks with the rejected reason
            this.catchCallbacks.forEach((callback) => {
                callback(reason);
            });
        };

        // Call the executor function with resolve and reject as arguments
        executor(resolve, reject);
    }

    catch(callback) {
        // Register a `catch` callback
        this.catchCallbacks.push(callback);
        return this; // Return the Pact instance for method chaining
    }

    then(callback) {
        // Register a `then` callback
        this.thenCallbacks.push(callback);
        return this; // Return the Pact instance for method chaining
    }
}

module.exports = Pact;
