function fizzBuzz(numbers) {
    const result = [];
    
    for (const num of numbers) {
        if (num % 3 === 0 && num % 5 === 0) {
            result.push("fizzbuzz");
        } else if (num % 3 === 0) {
            result.push("fizz");
        } else if (num % 5 === 0) {
            result.push("buzz");
        }
    }
    
    return result.join("");
}

module.exports = fizzBuzz;
