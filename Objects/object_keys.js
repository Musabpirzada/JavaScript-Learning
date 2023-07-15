function numberOfKeys(object) {
    let sum = 0;
    for(let key in object){
        sum += 1;
    }
    return sum;
}

module.exports = numberOfKeys;