function timer() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(); // Resolving the promise after one second (1000 milliseconds)
        }, 1000);
    });
}

module.exports = timer;
