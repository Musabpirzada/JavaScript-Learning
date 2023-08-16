const Hero = require('./Hero');

class Warrior extends Hero {
    constructor() {
        super(); // Call the constructor of the parent class
        this.rage = 0;
    }

    takeDamage(damage) {
        this.rage += 1; // Increment rage by 1
        super.takeDamage(damage); // Call the takeDamage method from the parent class
    }
}

module.exports = Warrior;



class Hero {
    constructor() {
        this.health = 50;
    }

    takeDamage(damage) {
        this.health -= damage;
    }
}

module.exports = Hero;
