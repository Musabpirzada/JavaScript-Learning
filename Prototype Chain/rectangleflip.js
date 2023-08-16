const Shape = require('./Shape');

function Rectangle(x, y, height, width) {
    Shape.call(this, x, y);
    this.height = height;
    this.width = width;
}

// Link Rectangle.prototype to Shape.prototype
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle; // Set the correct constructor

// Add the flip function to Rectangle.prototype
Rectangle.prototype.flip = function () {
    // Swap height and width using a temporary variable
    const temp = this.height;
    this.height = this.width;
    this.width = temp;
};

module.exports = Rectangle;
