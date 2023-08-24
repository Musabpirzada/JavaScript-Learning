function allUnique(numbers) {
    return numbers.reduce((accumulator, currentValue, index) => {
        if (!accumulator) {
            return false; // Stop checking if already found a non-unique element
        }
        
        return !numbers.slice(index + 1).includes(currentValue); // Check if currentValue is unique
    }, true);
}

module.exports = allUnique;
