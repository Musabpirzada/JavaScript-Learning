// Our Shape "Constructor"
function Shape(x, y) {
    // Store x and y in this.position
    this.position = {
        x: x,
        y: y
    };
}

// Define the move function on Shape.prototype
Shape.prototype.move = function(x, y) {
    this.position.x += x;
    this.position.y += y;
};

module.exports = Shape;

// Usage
const shape = new Shape(1, 1);

shape.move(1, 4);

console.log(shape.position.x); // 2
console.log(shape.position.y); // 5
