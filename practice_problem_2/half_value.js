function halfValue(numbers) {
  const result = [];
  
  for (let i = 0; i < numbers.length; i++) {
    const halved = numbers[i] / 2;
    const roundedHalved = Math.ceil(halved);
    result.push(roundedHalved);
  }
  
  return result;
}

module.exports = halfValue;
