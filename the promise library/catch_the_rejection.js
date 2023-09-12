class Pact {
    constructor(executor) {
        // Define the resolve and reject functions
        const resolve = (value) => {
            // Call the `then` callback with the resolved value
            if (this.thenCallback) {
                this.thenCallback(value);
            }
        };

        const reject = (reason) => {
            // Call the `catch` callback with the rejected reason
            if (this.catchCallback) {
                this.catchCallback(reason);
            }
        };

        // Call the executor function with resolve and reject as arguments
        executor(resolve, reject);
    }

    catch(callback) {
        // Set the `catch` callback to be called by the `reject` function
        this.catchCallback = callback;
    }

    then(callback) {
        // Set the `then` callback to be called by the `resolve` function
        this.thenCallback = callback;
    }
}

module.exports = Pact;
