function sortUp(array) {
    array.sort(function comparison(a,b) {
        if (a < b) {
            // take a first
            return -1;
        }
        if (b < a) {
            // take b first
            return 1;
        }
        // no change is needed
        return 0;
    });
}

module.exports = sortUp;
