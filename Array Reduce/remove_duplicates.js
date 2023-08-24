function removeDuplicates(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        if (!accumulator.includes(currentValue)) {
            accumulator.push(currentValue);
        }
        return accumulator;
    }, [numbers[0]]); // Start with an array containing the first element
}

module.exports = removeDuplicates;
