function startError() {
    const x = 3;
    x(); // This will throw TypeError: x is not a function.
}

module.exports = startError;
