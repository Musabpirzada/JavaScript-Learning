function unique(array) {
    const uniqueArray = [];

    for (let i = 0; i < array.length; i++) {
        const currentNumber = array[i];
        let isUnique = true;

        for (let j = 0; j < uniqueArray.length; j++) {
            if (currentNumber === uniqueArray[j]) {
                isUnique = false;
                break;
            }
        }

        if (isUnique) {
            uniqueArray.push(currentNumber);
        }
    }

    return uniqueArray;
}

module.exports = unique;
