const { makeFood } = require('./Kitchen');

class Order {
    constructor() {
        this.isReady = false;
        this.error = null; // Initialize error as null
    }

    request(food) {
        // Call makeFood and set up a callback function using .then
        makeFood(food)
            .then(() => {
                // When the promise is resolved, this callback is executed.
                this.isReady = true; // Set isReady to true since the food is ready.
            })
            .catch((error) => {
                // Store the error on the order instance
                this.error = error;
                console.error('An error occurred while making the food:', error);
            });
    }
}

module.exports = Order;
