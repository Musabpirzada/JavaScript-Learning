const Shape = require('./Shape');

function Circle(x, y, radius) {
    Shape.call(this, x, y);
    this.radius = radius;
}

// Link Circle.prototype to Shape.prototype
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle; // Set the correct constructor

module.exports = Circle;
