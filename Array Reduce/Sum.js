function sum(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue; // Sum the numbers here!
    });
}

module.exports = sum;
