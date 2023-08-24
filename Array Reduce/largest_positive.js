function largest(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        return Math.max(accumulator, currentValue);
    }, 1); // Set initial value to 1
}

module.exports = largest;
