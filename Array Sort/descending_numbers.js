function sortDown(array) {
  array.sort(function comparison(a, b) {
    if (a < b) {
      // take b first for descending order
      return 1;
    }
    if (b < a) {
      // take a first for descending order
      return -1;
    }
    // no change is needed
    return 0;
  });
}

module.exports = sortDown;
