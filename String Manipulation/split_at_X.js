function splitAtX(string) {
    let index = string.indexOf('x');

    if (index === -1) {
        // 'x' not found in the string
        return string;
    }

    let firstHalf = string.slice(0, index);
    let secondHalf = string.slice(index + 1);

    if (firstHalf.length >= secondHalf.length) {
        return firstHalf;
    } else {
        return secondHalf;
    }
}

module.exports = splitAtX;
