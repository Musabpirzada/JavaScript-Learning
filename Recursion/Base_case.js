function factorial(n) {
    if (n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(1)); // 1
console.log(factorial(4)); // 24

module.exports = factorial;
