const squared = require('./squared');

function squaredMap(arr) {
    return arr.map((element) => squared(element));
}

module.exports = squaredMap;
