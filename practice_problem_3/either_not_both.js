function eitherNotBoth(num) {
    const divisibleBy3 = num % 3 === 0;
    const divisibleBy5 = num % 5 === 0;
    
    return (divisibleBy3 || divisibleBy5) && !(divisibleBy3 && divisibleBy5);
}

module.exports = eitherNotBoth;
