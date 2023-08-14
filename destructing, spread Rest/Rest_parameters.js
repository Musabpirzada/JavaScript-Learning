function log(...args) {
    console.log(args);
}

log(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]


function log(a, b, ...args) {
    console.log(args);
}

log(1, 2, 3, 4, 5); // [3, 4, 5]


const [a, b, ...others] = [1, 2, 3, 4, 5];

console.log(others); // [3, 4, 5]