const numbers = [1, 2, 3];

function add(a, b, c) {
  return a + b + c;
}

const sum = add(...numbers);

console.log(sum); // 6