// Our Shape "Constructor"
function Shape(x, y) {
    // Store x and y in this.position
    this.position = {
        x: x,
        y: y
    };
}

module.exports = Shape;

// Usage
const shape = new Shape(5, 10);

console.log(shape.position.x); // 5
console.log(shape.position.y); // 10
