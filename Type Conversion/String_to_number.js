function toNumber(string) {
    const parsedNumber = parseFloat(string);
    return isNaN(parsedNumber) ? 0 : parsedNumber;
}

module.exports = toNumber;
