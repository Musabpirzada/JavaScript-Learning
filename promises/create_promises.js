function timer(delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(); // Resolving the promise after the specified delay
        }, delay);
    });
}

module.exports = timer;
