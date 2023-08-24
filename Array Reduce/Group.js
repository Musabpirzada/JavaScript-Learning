function group(foods) {
    return foods.reduce((accumulator, currentValue) => {
        const foodType = currentValue.type;

        if (!accumulator[foodType]) {
            accumulator[foodType] = [];
        }

        accumulator[foodType].push(currentValue.food);
        
        return accumulator;
    }, {});
}

module.exports = group;
